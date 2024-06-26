/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/system_parameter.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class SystemParameters extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            rules?: SystemParameterRule[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("rules" in data && data.rules != undefined) {
                    this.rules = data.rules;
                }
            }
        }
        get rules() {
            return pb_1.Message.getRepeatedWrapperField(this, SystemParameterRule, 1) as SystemParameterRule[];
        }
        set rules(value: SystemParameterRule[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            rules?: ReturnType<typeof SystemParameterRule.prototype.toObject>[];
        }): SystemParameters {
            const message = new SystemParameters({});
            if (data.rules != null) {
                message.rules = data.rules.map(item => SystemParameterRule.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                rules?: ReturnType<typeof SystemParameterRule.prototype.toObject>[];
            } = {};
            if (this.rules != null) {
                data.rules = this.rules.map((item: SystemParameterRule) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.rules.length)
                writer.writeRepeatedMessage(1, this.rules, (item: SystemParameterRule) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SystemParameters {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SystemParameters();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.rules, () => pb_1.Message.addToRepeatedWrapperField(message, 1, SystemParameterRule.deserialize(reader), SystemParameterRule));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SystemParameters {
            return SystemParameters.deserialize(bytes);
        }
    }
    export class SystemParameterRule extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            selector?: string;
            parameters?: SystemParameter[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("selector" in data && data.selector != undefined) {
                    this.selector = data.selector;
                }
                if ("parameters" in data && data.parameters != undefined) {
                    this.parameters = data.parameters;
                }
            }
        }
        get selector() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set selector(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get parameters() {
            return pb_1.Message.getRepeatedWrapperField(this, SystemParameter, 2) as SystemParameter[];
        }
        set parameters(value: SystemParameter[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            selector?: string;
            parameters?: ReturnType<typeof SystemParameter.prototype.toObject>[];
        }): SystemParameterRule {
            const message = new SystemParameterRule({});
            if (data.selector != null) {
                message.selector = data.selector;
            }
            if (data.parameters != null) {
                message.parameters = data.parameters.map(item => SystemParameter.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                selector?: string;
                parameters?: ReturnType<typeof SystemParameter.prototype.toObject>[];
            } = {};
            if (this.selector != null) {
                data.selector = this.selector;
            }
            if (this.parameters != null) {
                data.parameters = this.parameters.map((item: SystemParameter) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.selector.length)
                writer.writeString(1, this.selector);
            if (this.parameters.length)
                writer.writeRepeatedMessage(2, this.parameters, (item: SystemParameter) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SystemParameterRule {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SystemParameterRule();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.selector = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.parameters, () => pb_1.Message.addToRepeatedWrapperField(message, 2, SystemParameter.deserialize(reader), SystemParameter));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SystemParameterRule {
            return SystemParameterRule.deserialize(bytes);
        }
    }
    export class SystemParameter extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            http_header?: string;
            url_query_parameter?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("http_header" in data && data.http_header != undefined) {
                    this.http_header = data.http_header;
                }
                if ("url_query_parameter" in data && data.url_query_parameter != undefined) {
                    this.url_query_parameter = data.url_query_parameter;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get http_header() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set http_header(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get url_query_parameter() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set url_query_parameter(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            name?: string;
            http_header?: string;
            url_query_parameter?: string;
        }): SystemParameter {
            const message = new SystemParameter({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.http_header != null) {
                message.http_header = data.http_header;
            }
            if (data.url_query_parameter != null) {
                message.url_query_parameter = data.url_query_parameter;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                http_header?: string;
                url_query_parameter?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.http_header != null) {
                data.http_header = this.http_header;
            }
            if (this.url_query_parameter != null) {
                data.url_query_parameter = this.url_query_parameter;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.http_header.length)
                writer.writeString(2, this.http_header);
            if (this.url_query_parameter.length)
                writer.writeString(3, this.url_query_parameter);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SystemParameter {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SystemParameter();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.http_header = reader.readString();
                        break;
                    case 3:
                        message.url_query_parameter = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SystemParameter {
            return SystemParameter.deserialize(bytes);
        }
    }
}
