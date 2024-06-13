// set env variable TEMPORAL_CLOUD_API_KEY to your API key

import * as grpc from "@grpc/grpc-js"

// temporal.api.cloud.cloudservice.v1
import { temporal as TemporalCloudServiceService } from "./generated/temporal/api/cloud/cloudservice/v1/service"
import { temporal as TemporalCloudServiceRequestResponse } from "./generated/temporal/api/cloud/cloudservice/v1/request_response"
import { temporal as TemporalNamespaceMessage } from "./generated/temporal/api/cloud/namespace/v1/message"
const TemporalCloudAPIVersion = "2024-05-13-00"
const TemporalCloudAPIVersionHeader = "temporal-cloud-api-version" // Define the header name for the API version

// Temporary Cloud API address
const addr = "saas-api.tmprl.cloud:443"

let client:
    | TemporalCloudServiceService.api.cloud.cloudservice.v1.CloudServiceClient
    | undefined

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
        client =
            new TemporalCloudServiceService.api.cloud.cloudservice.v1.CloudServiceClient(
                addr,
                combinedCredentials
            )
    }
    return client
}

const listNamespaces = async () => {
    const client = getClient()
    const listNsReq =
        new TemporalCloudServiceRequestResponse.api.cloud.cloudservice.v1.GetNamespacesRequest()
    return new Promise((resolve, reject) => {
        client.GetNamespaces(listNsReq, (error, response) => {
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

    const createNsReq =
        new TemporalCloudServiceRequestResponse.api.cloud.cloudservice.v1.CreateNamespaceRequest()
    const nsSpec =
        new TemporalNamespaceMessage.api.cloud.namespace.v1.NamespaceSpec()

    // just this spec doesnt work, we get "Error: 7 PERMISSION_DENIED: Request unauthorized"
    nsSpec.name = "ts-lib-namespace"

    nsSpec.retention_days = 3
    nsSpec.regions = ["eu-west-central-1"]

    // this is what its called in the ui
    // nsSpec.regions = ["eu-central-1"]

    // lets try to add the mTLS spec as a CA cert is required when creating a namespace in the UI
    const mTlsSpec =
        new TemporalNamespaceMessage.api.cloud.namespace.v1.MtlsAuthSpec()
    const caCert = process.env.TEMPORAL_CLOUD_MTLS_CA_CERT
    if (!caCert) {
        throw new Error("No CA cert provided")
    }
    // base64 encode ca cert
    const base64CaCert = Buffer.from(caCert).toString("base64")
    mTlsSpec.accepted_client_ca = base64CaCert
    mTlsSpec.enabled = true

    // this prints the mTLS spec correctly but it still doesnt work and mTLS is not enabled
    console.log("mTLS spec:")
    console.log(mTlsSpec.toObject())

    nsSpec.mtls_auth = mTlsSpec

    const codecServerSpec =
        new TemporalNamespaceMessage.api.cloud.namespace.v1.CodecServerSpec()

    codecServerSpec.endpoint = "http://localhost:4321"
    codecServerSpec.pass_access_token = true
    codecServerSpec.include_cross_origin_credentials = true
    nsSpec.codec_server = codecServerSpec

    createNsReq.spec = nsSpec
    console.log("Creating namespace with the following spec...")
    console.log(JSON.stringify(nsSpec.toObject(), null, 4))

    // this still doesnt work, with "Error: 7 PERMISSION_DENIED: Request unauthorized"
    client.CreateNamespace(createNsReq, (error, response) => {
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
