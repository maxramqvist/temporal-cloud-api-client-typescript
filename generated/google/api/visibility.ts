/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/visibility.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../protobuf/descriptor";
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class Visibility extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            rules?: VisibilityRule[];
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
            return pb_1.Message.getRepeatedWrapperField(this, VisibilityRule, 1) as VisibilityRule[];
        }
        set rules(value: VisibilityRule[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            rules?: ReturnType<typeof VisibilityRule.prototype.toObject>[];
        }): Visibility {
            const message = new Visibility({});
            if (data.rules != null) {
                message.rules = data.rules.map(item => VisibilityRule.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                rules?: ReturnType<typeof VisibilityRule.prototype.toObject>[];
            } = {};
            if (this.rules != null) {
                data.rules = this.rules.map((item: VisibilityRule) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.rules.length)
                writer.writeRepeatedMessage(1, this.rules, (item: VisibilityRule) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Visibility {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Visibility();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.rules, () => pb_1.Message.addToRepeatedWrapperField(message, 1, VisibilityRule.deserialize(reader), VisibilityRule));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Visibility {
            return Visibility.deserialize(bytes);
        }
    }
    export class VisibilityRule extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            selector?: string;
            restriction?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("selector" in data && data.selector != undefined) {
                    this.selector = data.selector;
                }
                if ("restriction" in data && data.restriction != undefined) {
                    this.restriction = data.restriction;
                }
            }
        }
        get selector() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set selector(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get restriction() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set restriction(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            selector?: string;
            restriction?: string;
        }): VisibilityRule {
            const message = new VisibilityRule({});
            if (data.selector != null) {
                message.selector = data.selector;
            }
            if (data.restriction != null) {
                message.restriction = data.restriction;
            }
            return message;
        }
        toObject() {
            const data: {
                selector?: string;
                restriction?: string;
            } = {};
            if (this.selector != null) {
                data.selector = this.selector;
            }
            if (this.restriction != null) {
                data.restriction = this.restriction;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.selector.length)
                writer.writeString(1, this.selector);
            if (this.restriction.length)
                writer.writeString(2, this.restriction);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VisibilityRule {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VisibilityRule();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.selector = reader.readString();
                        break;
                    case 2:
                        message.restriction = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): VisibilityRule {
            return VisibilityRule.deserialize(bytes);
        }
    }
}
