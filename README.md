## Temporal Cloud API Usage Example (Typescript)

[Temporal Cloud Ops API](https://docs.temporal.io/cloud/api-keys)

#### Run a sample API call

[Generate a Temporal Cloud API key](https://docs.temporal.io/cloud/api-keys)

```
# set TEMPORAL_CLOUD_API_KEY in your environment
npm ci && npx ts-node index.ts
```

#### Generate Typescript code from Temporal API Protobufs

**This is not required if you clone this repo (as the generated files exist already)**

```
git clone https://github.com/googleapis/googleapis.git
## take google/api out of here and put in root of this repo

git clone https://github.com/temporalio/api-cloud.git
## put temporal/ in root of this repo

mkdir generated # this will hold the generated typescript files
```

You'll need grpc-tools which is compatible with node (vs browser) js.

`npm install -g grpc-tools protoc-gen-ts`

```
# generate Typescript from Google API protobufs (dependency)
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./generated --grpc_out=grpc_js:./generated --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
       --ts_out=service=grpc-node,mode=grpc-js:./generated \
    $(find ./google/api/ -name "*.proto")

# generate Typescript from Temporal API protobufs
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./generated --grpc_out=grpc_js:./generated --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
       --ts_out=service=grpc-node,mode=grpc-js:./generated \
$(find ./temporal/api/cloud/ -name "*.proto")
```
