// set env variable TEMPORAL_CLOUD_API_KEY to your API key

import * as grpc from "@grpc/grpc-js"
import { CloudServiceClient } from "./generated/temporal/api/cloud/cloudservice/v1/service_grpc_pb"
import {
    CreateNamespaceRequest,
    GetNamespacesRequest,
} from "./generated/temporal/api/cloud/cloudservice/v1/request_response_pb"
import {
    NamespaceSpec,
    MtlsAuthSpec,
} from "./generated/temporal/api/cloud/namespace/v1/message_pb"
const TemporalCloudAPIVersion = "2024-05-13-00"
const TemporalCloudAPIVersionHeader = "temporal-cloud-api-version" // Define the header name for the API version

// Temporary Cloud API address
const addr = "saas-api.tmprl.cloud:443"

let client: CloudServiceClient | undefined

// Setup the gRPC client
const getClient = () => {
    if (!client) {
        const credentials = grpc.credentials.createSsl()
        const apiKey = process.env.TEMPORAL_CLOUD_API_KEY
        if (!apiKey) {
            throw new Error(
                "Please set the TEMPORAL_CLOUD_API_KEY environment variable"
            )
        }
        // Append headers for each request
        const callCredentials = grpc.credentials.createFromMetadataGenerator(
            (params, callback) => {
                const metadata = new grpc.Metadata()
                metadata.set("authorization", `Bearer ${apiKey}`)
                metadata.set(
                    TemporalCloudAPIVersionHeader,
                    TemporalCloudAPIVersion
                ) // Set the API version here
                callback(null, metadata)
            }
        )

        // Combine SSL credentials with call credentials
        const combinedCredentials = grpc.credentials.combineChannelCredentials(
            credentials,
            callCredentials
        )
        client = new CloudServiceClient(addr, combinedCredentials)
    }
    return client
}

const listNamespaces = async () => {
    const client = getClient()
    const listNsReq = new GetNamespacesRequest()
    return new Promise((resolve, reject) => {
        client.getNamespaces(listNsReq, (error, response) => {
            if (error) {
                reject(error)
            } else {
                if (response) {
                    resolve(response.toObject())
                }
            }
        })
    })
}

const main = async () => {
    const client = getClient()
    client.waitForReady(Date.now() + 10000, (error) => {
        // this is a general error handler for connection errors on the client
        if (error) {
            console.error(
                "Error waiting for Temporal Cloud Ops client to get ready:",
                error
            )
            throw error
        } else {
            console.log("Temporal Cloud Ops client is ready ✅")
        }
    })

    const namespaces = await listNamespaces()
    console.log("Namespaces:", JSON.stringify(namespaces, null, 4))

    const createNsReq = new CreateNamespaceRequest()
    const nsSpec = new NamespaceSpec()

    // just this spec doesnt work, we get "Error: 7 PERMISSION_DENIED: Request unauthorized"
    nsSpec.setName("ts-lib-namespace")
    nsSpec.setRetentionDays(3)
    nsSpec.setRegionsList(["eu-central-1"])

    // lets try to add the mTLS spec as a CA cert is required when creating a namespace in the UI
    const mTlsSpec = new MtlsAuthSpec()
    const caCert = process.env.TEMPORAL_CLOUD_MTLS_CA_CERT
    if (!caCert) {
        throw new Error("No CA cert provided")
    }
    // base64 encode ca cert
    const base64CaCert = Buffer.from(caCert).toString("base64")
    mTlsSpec.setAcceptedClientCa(base64CaCert)

    // this prints the mTLS spec correctly but it still doesnt work and mTLS is not enabled
    console.log("mTLS spec:")
    console.log(mTlsSpec.toObject())

    nsSpec.setMtlsAuth(mTlsSpec)

    createNsReq.setSpec(nsSpec)
    console.log("Creating namespace with the following spec...")
    console.log(nsSpec.toObject())

    // this still doesnt work, with "Error: 7 PERMISSION_DENIED: Request unauthorized"
    client.createNamespace(createNsReq, (error, response) => {
        if (error) {
            console.error("Error creating namespace:", error)
        } else {
            if (response) {
                const responseObject = response.toObject()
                console.log("Created namespace response:", responseObject)
            }
        }
    })
}

main()
