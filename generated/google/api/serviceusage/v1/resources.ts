/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/serviceusage/v1/resources.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../auth";
import * as dependency_2 from "./../../documentation";
import * as dependency_3 from "./../../endpoint";
import * as dependency_4 from "./../../monitored_resource";
import * as dependency_5 from "./../../monitoring";
import * as dependency_6 from "./../../quota";
import * as dependency_7 from "./../../resource";
import * as dependency_8 from "./../../usage";
import * as dependency_9 from "./../../../protobuf/api";
import * as pb_1 from "google-protobuf";
export namespace google.api.serviceusage.v1 {
    export enum State {
        STATE_UNSPECIFIED = 0,
        DISABLED = 1,
        ENABLED = 2
    }
    export class Service extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            parent?: string;
            config?: ServiceConfig;
            state?: State;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("parent" in data && data.parent != undefined) {
                    this.parent = data.parent;
                }
                if ("config" in data && data.config != undefined) {
                    this.config = data.config;
                }
                if ("state" in data && data.state != undefined) {
                    this.state = data.state;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get parent() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set parent(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get config() {
            return pb_1.Message.getWrapperField(this, ServiceConfig, 2) as ServiceConfig;
        }
        set config(value: ServiceConfig) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_config() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get state() {
            return pb_1.Message.getFieldWithDefault(this, 4, State.STATE_UNSPECIFIED) as State;
        }
        set state(value: State) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            name?: string;
            parent?: string;
            config?: ReturnType<typeof ServiceConfig.prototype.toObject>;
            state?: State;
        }): Service {
            const message = new Service({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.parent != null) {
                message.parent = data.parent;
            }
            if (data.config != null) {
                message.config = ServiceConfig.fromObject(data.config);
            }
            if (data.state != null) {
                message.state = data.state;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                parent?: string;
                config?: ReturnType<typeof ServiceConfig.prototype.toObject>;
                state?: State;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.parent != null) {
                data.parent = this.parent;
            }
            if (this.config != null) {
                data.config = this.config.toObject();
            }
            if (this.state != null) {
                data.state = this.state;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.parent.length)
                writer.writeString(5, this.parent);
            if (this.has_config)
                writer.writeMessage(2, this.config, () => this.config.serialize(writer));
            if (this.state != State.STATE_UNSPECIFIED)
                writer.writeEnum(4, this.state);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Service {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Service();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 5:
                        message.parent = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.config, () => message.config = ServiceConfig.deserialize(reader));
                        break;
                    case 4:
                        message.state = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Service {
            return Service.deserialize(bytes);
        }
    }
    export class ServiceConfig extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            title?: string;
            apis?: dependency_9.google.protobuf.Api[];
            documentation?: dependency_2.google.api.Documentation;
            quota?: dependency_6.google.api.Quota;
            authentication?: dependency_1.google.api.Authentication;
            usage?: dependency_8.google.api.Usage;
            endpoints?: dependency_3.google.api.Endpoint[];
            monitored_resources?: dependency_4.google.api.MonitoredResourceDescriptor[];
            monitoring?: dependency_5.google.api.Monitoring;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 18, 25], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("apis" in data && data.apis != undefined) {
                    this.apis = data.apis;
                }
                if ("documentation" in data && data.documentation != undefined) {
                    this.documentation = data.documentation;
                }
                if ("quota" in data && data.quota != undefined) {
                    this.quota = data.quota;
                }
                if ("authentication" in data && data.authentication != undefined) {
                    this.authentication = data.authentication;
                }
                if ("usage" in data && data.usage != undefined) {
                    this.usage = data.usage;
                }
                if ("endpoints" in data && data.endpoints != undefined) {
                    this.endpoints = data.endpoints;
                }
                if ("monitored_resources" in data && data.monitored_resources != undefined) {
                    this.monitored_resources = data.monitored_resources;
                }
                if ("monitoring" in data && data.monitoring != undefined) {
                    this.monitoring = data.monitoring;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get title() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get apis() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_9.google.protobuf.Api, 3) as dependency_9.google.protobuf.Api[];
        }
        set apis(value: dependency_9.google.protobuf.Api[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get documentation() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.api.Documentation, 6) as dependency_2.google.api.Documentation;
        }
        set documentation(value: dependency_2.google.api.Documentation) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_documentation() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get quota() {
            return pb_1.Message.getWrapperField(this, dependency_6.google.api.Quota, 10) as dependency_6.google.api.Quota;
        }
        set quota(value: dependency_6.google.api.Quota) {
            pb_1.Message.setWrapperField(this, 10, value);
        }
        get has_quota() {
            return pb_1.Message.getField(this, 10) != null;
        }
        get authentication() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.api.Authentication, 11) as dependency_1.google.api.Authentication;
        }
        set authentication(value: dependency_1.google.api.Authentication) {
            pb_1.Message.setWrapperField(this, 11, value);
        }
        get has_authentication() {
            return pb_1.Message.getField(this, 11) != null;
        }
        get usage() {
            return pb_1.Message.getWrapperField(this, dependency_8.google.api.Usage, 15) as dependency_8.google.api.Usage;
        }
        set usage(value: dependency_8.google.api.Usage) {
            pb_1.Message.setWrapperField(this, 15, value);
        }
        get has_usage() {
            return pb_1.Message.getField(this, 15) != null;
        }
        get endpoints() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.google.api.Endpoint, 18) as dependency_3.google.api.Endpoint[];
        }
        set endpoints(value: dependency_3.google.api.Endpoint[]) {
            pb_1.Message.setRepeatedWrapperField(this, 18, value);
        }
        get monitored_resources() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.google.api.MonitoredResourceDescriptor, 25) as dependency_4.google.api.MonitoredResourceDescriptor[];
        }
        set monitored_resources(value: dependency_4.google.api.MonitoredResourceDescriptor[]) {
            pb_1.Message.setRepeatedWrapperField(this, 25, value);
        }
        get monitoring() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.api.Monitoring, 28) as dependency_5.google.api.Monitoring;
        }
        set monitoring(value: dependency_5.google.api.Monitoring) {
            pb_1.Message.setWrapperField(this, 28, value);
        }
        get has_monitoring() {
            return pb_1.Message.getField(this, 28) != null;
        }
        static fromObject(data: {
            name?: string;
            title?: string;
            apis?: ReturnType<typeof dependency_9.google.protobuf.Api.prototype.toObject>[];
            documentation?: ReturnType<typeof dependency_2.google.api.Documentation.prototype.toObject>;
            quota?: ReturnType<typeof dependency_6.google.api.Quota.prototype.toObject>;
            authentication?: ReturnType<typeof dependency_1.google.api.Authentication.prototype.toObject>;
            usage?: ReturnType<typeof dependency_8.google.api.Usage.prototype.toObject>;
            endpoints?: ReturnType<typeof dependency_3.google.api.Endpoint.prototype.toObject>[];
            monitored_resources?: ReturnType<typeof dependency_4.google.api.MonitoredResourceDescriptor.prototype.toObject>[];
            monitoring?: ReturnType<typeof dependency_5.google.api.Monitoring.prototype.toObject>;
        }): ServiceConfig {
            const message = new ServiceConfig({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.apis != null) {
                message.apis = data.apis.map(item => dependency_9.google.protobuf.Api.fromObject(item));
            }
            if (data.documentation != null) {
                message.documentation = dependency_2.google.api.Documentation.fromObject(data.documentation);
            }
            if (data.quota != null) {
                message.quota = dependency_6.google.api.Quota.fromObject(data.quota);
            }
            if (data.authentication != null) {
                message.authentication = dependency_1.google.api.Authentication.fromObject(data.authentication);
            }
            if (data.usage != null) {
                message.usage = dependency_8.google.api.Usage.fromObject(data.usage);
            }
            if (data.endpoints != null) {
                message.endpoints = data.endpoints.map(item => dependency_3.google.api.Endpoint.fromObject(item));
            }
            if (data.monitored_resources != null) {
                message.monitored_resources = data.monitored_resources.map(item => dependency_4.google.api.MonitoredResourceDescriptor.fromObject(item));
            }
            if (data.monitoring != null) {
                message.monitoring = dependency_5.google.api.Monitoring.fromObject(data.monitoring);
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                title?: string;
                apis?: ReturnType<typeof dependency_9.google.protobuf.Api.prototype.toObject>[];
                documentation?: ReturnType<typeof dependency_2.google.api.Documentation.prototype.toObject>;
                quota?: ReturnType<typeof dependency_6.google.api.Quota.prototype.toObject>;
                authentication?: ReturnType<typeof dependency_1.google.api.Authentication.prototype.toObject>;
                usage?: ReturnType<typeof dependency_8.google.api.Usage.prototype.toObject>;
                endpoints?: ReturnType<typeof dependency_3.google.api.Endpoint.prototype.toObject>[];
                monitored_resources?: ReturnType<typeof dependency_4.google.api.MonitoredResourceDescriptor.prototype.toObject>[];
                monitoring?: ReturnType<typeof dependency_5.google.api.Monitoring.prototype.toObject>;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.apis != null) {
                data.apis = this.apis.map((item: dependency_9.google.protobuf.Api) => item.toObject());
            }
            if (this.documentation != null) {
                data.documentation = this.documentation.toObject();
            }
            if (this.quota != null) {
                data.quota = this.quota.toObject();
            }
            if (this.authentication != null) {
                data.authentication = this.authentication.toObject();
            }
            if (this.usage != null) {
                data.usage = this.usage.toObject();
            }
            if (this.endpoints != null) {
                data.endpoints = this.endpoints.map((item: dependency_3.google.api.Endpoint) => item.toObject());
            }
            if (this.monitored_resources != null) {
                data.monitored_resources = this.monitored_resources.map((item: dependency_4.google.api.MonitoredResourceDescriptor) => item.toObject());
            }
            if (this.monitoring != null) {
                data.monitoring = this.monitoring.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.title.length)
                writer.writeString(2, this.title);
            if (this.apis.length)
                writer.writeRepeatedMessage(3, this.apis, (item: dependency_9.google.protobuf.Api) => item.serialize(writer));
            if (this.has_documentation)
                writer.writeMessage(6, this.documentation, () => this.documentation.serialize(writer));
            if (this.has_quota)
                writer.writeMessage(10, this.quota, () => this.quota.serialize(writer));
            if (this.has_authentication)
                writer.writeMessage(11, this.authentication, () => this.authentication.serialize(writer));
            if (this.has_usage)
                writer.writeMessage(15, this.usage, () => this.usage.serialize(writer));
            if (this.endpoints.length)
                writer.writeRepeatedMessage(18, this.endpoints, (item: dependency_3.google.api.Endpoint) => item.serialize(writer));
            if (this.monitored_resources.length)
                writer.writeRepeatedMessage(25, this.monitored_resources, (item: dependency_4.google.api.MonitoredResourceDescriptor) => item.serialize(writer));
            if (this.has_monitoring)
                writer.writeMessage(28, this.monitoring, () => this.monitoring.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ServiceConfig {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ServiceConfig();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.title = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.apis, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_9.google.protobuf.Api.deserialize(reader), dependency_9.google.protobuf.Api));
                        break;
                    case 6:
                        reader.readMessage(message.documentation, () => message.documentation = dependency_2.google.api.Documentation.deserialize(reader));
                        break;
                    case 10:
                        reader.readMessage(message.quota, () => message.quota = dependency_6.google.api.Quota.deserialize(reader));
                        break;
                    case 11:
                        reader.readMessage(message.authentication, () => message.authentication = dependency_1.google.api.Authentication.deserialize(reader));
                        break;
                    case 15:
                        reader.readMessage(message.usage, () => message.usage = dependency_8.google.api.Usage.deserialize(reader));
                        break;
                    case 18:
                        reader.readMessage(message.endpoints, () => pb_1.Message.addToRepeatedWrapperField(message, 18, dependency_3.google.api.Endpoint.deserialize(reader), dependency_3.google.api.Endpoint));
                        break;
                    case 25:
                        reader.readMessage(message.monitored_resources, () => pb_1.Message.addToRepeatedWrapperField(message, 25, dependency_4.google.api.MonitoredResourceDescriptor.deserialize(reader), dependency_4.google.api.MonitoredResourceDescriptor));
                        break;
                    case 28:
                        reader.readMessage(message.monitoring, () => message.monitoring = dependency_5.google.api.Monitoring.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ServiceConfig {
            return ServiceConfig.deserialize(bytes);
        }
    }
    export class OperationMetadata extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            resource_names?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("resource_names" in data && data.resource_names != undefined) {
                    this.resource_names = data.resource_names;
                }
            }
        }
        get resource_names() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set resource_names(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            resource_names?: string[];
        }): OperationMetadata {
            const message = new OperationMetadata({});
            if (data.resource_names != null) {
                message.resource_names = data.resource_names;
            }
            return message;
        }
        toObject() {
            const data: {
                resource_names?: string[];
            } = {};
            if (this.resource_names != null) {
                data.resource_names = this.resource_names;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.resource_names.length)
                writer.writeRepeatedString(2, this.resource_names);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OperationMetadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OperationMetadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): OperationMetadata {
            return OperationMetadata.deserialize(bytes);
        }
    }
}