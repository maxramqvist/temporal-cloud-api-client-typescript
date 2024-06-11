/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/context.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class Context extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            rules?: ContextRule[];
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
            return pb_1.Message.getRepeatedWrapperField(this, ContextRule, 1) as ContextRule[];
        }
        set rules(value: ContextRule[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            rules?: ReturnType<typeof ContextRule.prototype.toObject>[];
        }): Context {
            const message = new Context({});
            if (data.rules != null) {
                message.rules = data.rules.map(item => ContextRule.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                rules?: ReturnType<typeof ContextRule.prototype.toObject>[];
            } = {};
            if (this.rules != null) {
                data.rules = this.rules.map((item: ContextRule) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.rules.length)
                writer.writeRepeatedMessage(1, this.rules, (item: ContextRule) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Context {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Context();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.rules, () => pb_1.Message.addToRepeatedWrapperField(message, 1, ContextRule.deserialize(reader), ContextRule));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Context {
            return Context.deserialize(bytes);
        }
    }
    export class ContextRule extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            selector?: string;
            requested?: string[];
            provided?: string[];
            allowed_request_extensions?: string[];
            allowed_response_extensions?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4, 5], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("selector" in data && data.selector != undefined) {
                    this.selector = data.selector;
                }
                if ("requested" in data && data.requested != undefined) {
                    this.requested = data.requested;
                }
                if ("provided" in data && data.provided != undefined) {
                    this.provided = data.provided;
                }
                if ("allowed_request_extensions" in data && data.allowed_request_extensions != undefined) {
                    this.allowed_request_extensions = data.allowed_request_extensions;
                }
                if ("allowed_response_extensions" in data && data.allowed_response_extensions != undefined) {
                    this.allowed_response_extensions = data.allowed_response_extensions;
                }
            }
        }
        get selector() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set selector(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get requested() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set requested(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        get provided() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
        }
        set provided(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        get allowed_request_extensions() {
            return pb_1.Message.getFieldWithDefault(this, 4, []) as string[];
        }
        set allowed_request_extensions(value: string[]) {
            pb_1.Message.setField(this, 4, value);
        }
        get allowed_response_extensions() {
            return pb_1.Message.getFieldWithDefault(this, 5, []) as string[];
        }
        set allowed_response_extensions(value: string[]) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            selector?: string;
            requested?: string[];
            provided?: string[];
            allowed_request_extensions?: string[];
            allowed_response_extensions?: string[];
        }): ContextRule {
            const message = new ContextRule({});
            if (data.selector != null) {
                message.selector = data.selector;
            }
            if (data.requested != null) {
                message.requested = data.requested;
            }
            if (data.provided != null) {
                message.provided = data.provided;
            }
            if (data.allowed_request_extensions != null) {
                message.allowed_request_extensions = data.allowed_request_extensions;
            }
            if (data.allowed_response_extensions != null) {
                message.allowed_response_extensions = data.allowed_response_extensions;
            }
            return message;
        }
        toObject() {
            const data: {
                selector?: string;
                requested?: string[];
                provided?: string[];
                allowed_request_extensions?: string[];
                allowed_response_extensions?: string[];
            } = {};
            if (this.selector != null) {
                data.selector = this.selector;
            }
            if (this.requested != null) {
                data.requested = this.requested;
            }
            if (this.provided != null) {
                data.provided = this.provided;
            }
            if (this.allowed_request_extensions != null) {
                data.allowed_request_extensions = this.allowed_request_extensions;
            }
            if (this.allowed_response_extensions != null) {
                data.allowed_response_extensions = this.allowed_response_extensions;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.selector.length)
                writer.writeString(1, this.selector);
            if (this.requested.length)
                writer.writeRepeatedString(2, this.requested);
            if (this.provided.length)
                writer.writeRepeatedString(3, this.provided);
            if (this.allowed_request_extensions.length)
                writer.writeRepeatedString(4, this.allowed_request_extensions);
            if (this.allowed_response_extensions.length)
                writer.writeRepeatedString(5, this.allowed_response_extensions);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ContextRule {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ContextRule();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.selector = reader.readString();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    case 3:
                        pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                        break;
                    case 4:
                        pb_1.Message.addToRepeatedField(message, 4, reader.readString());
                        break;
                    case 5:
                        pb_1.Message.addToRepeatedField(message, 5, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ContextRule {
            return ContextRule.deserialize(bytes);
        }
    }
}
