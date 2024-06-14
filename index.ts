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

const temporalAccountID = process.env.TEMPORAL_ACCOUNT_ID

const verifyNamespaceName = (namespace: string) => {
    if (!namespace) {
        throw new Error("Namespace name is required")
    }
    if (namespace.length < 1 || namespace.length > 64) {
        throw new Error("Namespace name must be between 1 and 64 characters")
    }

    // namespacename must end with dot + temporalAccountID
    if (!namespace.endsWith(`.${temporalAccountID}`)) {
        throw new Error(
            `Namespace name must end with dot + temporalAccountID : ${temporalAccountID}`
        )
    }
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

const createNamespace = async (
    name: string,
    retention_days: number = 3,
    regions: string[] = ["aws-eu-central-1"],
    mtlsCaCert: string, // base64 encoded CA certificate
    codecServerEndpoint: string // must start with https
) => {
    const client = getClient()
    const createNsReq =
        new TemporalCloudServiceRequestResponse.api.cloud.cloudservice.v1.CreateNamespaceRequest()
    const nsSpec =
        new TemporalNamespaceMessage.api.cloud.namespace.v1.NamespaceSpec()

    nsSpec.name = name
    nsSpec.retention_days = retention_days
    nsSpec.regions = regions

    // throw an error if any of the regions doesn't start with "aws-" or "gcp-"
    nsSpec.regions.forEach((region) => {
        if (!region.startsWith("aws-") && !region.startsWith("gcp-")) {
            throw new Error("Invalid region")
        }
    })

    // lets try to add the mTLS spec as a CA cert is required when creating a namespace in the UI
    if (!mtlsCaCert) {
        throw new Error("No CA cert provided")
    }
    if (Buffer.from(mtlsCaCert, "base64").toString("base64") !== mtlsCaCert) {
        throw new Error("CA cert is not base64 encoded")
    }

    const mTlsSpec =
        new TemporalNamespaceMessage.api.cloud.namespace.v1.MtlsAuthSpec()
    mTlsSpec.accepted_client_ca = mtlsCaCert
    mTlsSpec.enabled = true

    nsSpec.mtls_auth = mTlsSpec

    const codecServerSpec =
        new TemporalNamespaceMessage.api.cloud.namespace.v1.CodecServerSpec()

    // throw an error if spec doesn't start with https
    if (!codecServerSpec.endpoint.startsWith("https")) {
        throw new Error("Endpoint must start with https")
    }
    codecServerSpec.endpoint = codecServerEndpoint

    codecServerSpec.pass_access_token = true
    codecServerSpec.include_cross_origin_credentials = true
    nsSpec.codec_server = codecServerSpec

    createNsReq.spec = nsSpec

    return new Promise((resolve, reject) => {
        client.CreateNamespace(createNsReq, (error, response) => {
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

const getNamespace = async (
    namespace: string
): Promise<TemporalCloudServiceRequestResponse.api.cloud.cloudservice.v1.GetNamespaceResponse> => {
    verifyNamespaceName(namespace)
    const client = getClient()
    const getNsReq =
        new TemporalCloudServiceRequestResponse.api.cloud.cloudservice.v1.GetNamespaceRequest(
            { namespace }
        )
    return new Promise((resolve, reject) => {
        client.GetNamespace(getNsReq, (error, response) => {
            if (error) {
                reject(error)
            } else {
                if (response) {
                    resolve(response)
                }
            }
        })
    })
}

const deleteNamespace = async (namespace: string, resource_version: string) => {
    verifyNamespaceName(namespace)
    const client = getClient()
    const deleteNsReq =
        new TemporalCloudServiceRequestResponse.api.cloud.cloudservice.v1.DeleteNamespaceRequest(
            { namespace, resource_version }
        )

    return new Promise((resolve, reject) => {
        client.DeleteNamespace(deleteNsReq, (error, response) => {
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

    // const namespaces = await listNamespaces()
    // console.log("Namespaces:", JSON.stringify(namespaces, null, 4))
    const getNsResp = await getNamespace(`test-namespace.${temporalAccountID}`)
    console.log(getNsResp)
    const deleteResult = await deleteNamespace(
        `test-namespace.${temporalAccountID}`, //
        getNsResp.namespace.resource_version
    )
    console.log(deleteResult)
}

main()
