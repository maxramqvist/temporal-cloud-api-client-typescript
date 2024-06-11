/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/servicecontrol/v1/metric_value.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./distribution";
import * as dependency_2 from "./../../../protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export namespace google.api.servicecontrol.v1 {
    export class MetricValue extends pb_1.Message {
        #one_of_decls: number[][] = [[4, 5, 6, 7, 8]];
        constructor(data?: any[] | ({
            labels?: Map<string, string>;
            start_time?: dependency_2.google.protobuf.Timestamp;
            end_time?: dependency_2.google.protobuf.Timestamp;
        } & (({
            bool_value?: boolean;
            int64_value?: never;
            double_value?: never;
            string_value?: never;
            distribution_value?: never;
        } | {
            bool_value?: never;
            int64_value?: number;
            double_value?: never;
            string_value?: never;
            distribution_value?: never;
        } | {
            bool_value?: never;
            int64_value?: never;
            double_value?: number;
            string_value?: never;
            distribution_value?: never;
        } | {
            bool_value?: never;
            int64_value?: never;
            double_value?: never;
            string_value?: string;
            distribution_value?: never;
        } | {
            bool_value?: never;
            int64_value?: never;
            double_value?: never;
            string_value?: never;
            distribution_value?: dependency_1.google.api.servicecontrol.v1.Distribution;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("labels" in data && data.labels != undefined) {
                    this.labels = data.labels;
                }
                if ("start_time" in data && data.start_time != undefined) {
                    this.start_time = data.start_time;
                }
                if ("end_time" in data && data.end_time != undefined) {
                    this.end_time = data.end_time;
                }
                if ("bool_value" in data && data.bool_value != undefined) {
                    this.bool_value = data.bool_value;
                }
                if ("int64_value" in data && data.int64_value != undefined) {
                    this.int64_value = data.int64_value;
                }
                if ("double_value" in data && data.double_value != undefined) {
                    this.double_value = data.double_value;
                }
                if ("string_value" in data && data.string_value != undefined) {
                    this.string_value = data.string_value;
                }
                if ("distribution_value" in data && data.distribution_value != undefined) {
                    this.distribution_value = data.distribution_value;
                }
            }
            if (!this.labels)
                this.labels = new Map();
        }
        get labels() {
            return pb_1.Message.getField(this, 1) as any as Map<string, string>;
        }
        set labels(value: Map<string, string>) {
            pb_1.Message.setField(this, 1, value as any);
        }
        get start_time() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 2) as dependency_2.google.protobuf.Timestamp;
        }
        set start_time(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_start_time() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get end_time() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 3) as dependency_2.google.protobuf.Timestamp;
        }
        set end_time(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_end_time() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get bool_value() {
            return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
        }
        set bool_value(value: boolean) {
            pb_1.Message.setOneofField(this, 4, this.#one_of_decls[0], value);
        }
        get has_bool_value() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get int64_value() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set int64_value(value: number) {
            pb_1.Message.setOneofField(this, 5, this.#one_of_decls[0], value);
        }
        get has_int64_value() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get double_value() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set double_value(value: number) {
            pb_1.Message.setOneofField(this, 6, this.#one_of_decls[0], value);
        }
        get has_double_value() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get string_value() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set string_value(value: string) {
            pb_1.Message.setOneofField(this, 7, this.#one_of_decls[0], value);
        }
        get has_string_value() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get distribution_value() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.api.servicecontrol.v1.Distribution, 8) as dependency_1.google.api.servicecontrol.v1.Distribution;
        }
        set distribution_value(value: dependency_1.google.api.servicecontrol.v1.Distribution) {
            pb_1.Message.setOneofWrapperField(this, 8, this.#one_of_decls[0], value);
        }
        get has_distribution_value() {
            return pb_1.Message.getField(this, 8) != null;
        }
        get value() {
            const cases: {
                [index: number]: "none" | "bool_value" | "int64_value" | "double_value" | "string_value" | "distribution_value";
            } = {
                0: "none",
                4: "bool_value",
                5: "int64_value",
                6: "double_value",
                7: "string_value",
                8: "distribution_value"
            };
            return cases[pb_1.Message.computeOneofCase(this, [4, 5, 6, 7, 8])];
        }
        static fromObject(data: {
            labels?: {
                [key: string]: string;
            };
            start_time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            end_time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            bool_value?: boolean;
            int64_value?: number;
            double_value?: number;
            string_value?: string;
            distribution_value?: ReturnType<typeof dependency_1.google.api.servicecontrol.v1.Distribution.prototype.toObject>;
        }): MetricValue {
            const message = new MetricValue({});
            if (typeof data.labels == "object") {
                message.labels = new Map(Object.entries(data.labels));
            }
            if (data.start_time != null) {
                message.start_time = dependency_2.google.protobuf.Timestamp.fromObject(data.start_time);
            }
            if (data.end_time != null) {
                message.end_time = dependency_2.google.protobuf.Timestamp.fromObject(data.end_time);
            }
            if (data.bool_value != null) {
                message.bool_value = data.bool_value;
            }
            if (data.int64_value != null) {
                message.int64_value = data.int64_value;
            }
            if (data.double_value != null) {
                message.double_value = data.double_value;
            }
            if (data.string_value != null) {
                message.string_value = data.string_value;
            }
            if (data.distribution_value != null) {
                message.distribution_value = dependency_1.google.api.servicecontrol.v1.Distribution.fromObject(data.distribution_value);
            }
            return message;
        }
        toObject() {
            const data: {
                labels?: {
                    [key: string]: string;
                };
                start_time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                end_time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                bool_value?: boolean;
                int64_value?: number;
                double_value?: number;
                string_value?: string;
                distribution_value?: ReturnType<typeof dependency_1.google.api.servicecontrol.v1.Distribution.prototype.toObject>;
            } = {};
            if (this.labels != null) {
                data.labels = (Object.fromEntries)(this.labels);
            }
            if (this.start_time != null) {
                data.start_time = this.start_time.toObject();
            }
            if (this.end_time != null) {
                data.end_time = this.end_time.toObject();
            }
            if (this.bool_value != null) {
                data.bool_value = this.bool_value;
            }
            if (this.int64_value != null) {
                data.int64_value = this.int64_value;
            }
            if (this.double_value != null) {
                data.double_value = this.double_value;
            }
            if (this.string_value != null) {
                data.string_value = this.string_value;
            }
            if (this.distribution_value != null) {
                data.distribution_value = this.distribution_value.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            for (const [key, value] of this.labels) {
                writer.writeMessage(1, this.labels, () => {
                    writer.writeString(1, key);
                    writer.writeString(2, value);
                });
            }
            if (this.has_start_time)
                writer.writeMessage(2, this.start_time, () => this.start_time.serialize(writer));
            if (this.has_end_time)
                writer.writeMessage(3, this.end_time, () => this.end_time.serialize(writer));
            if (this.has_bool_value)
                writer.writeBool(4, this.bool_value);
            if (this.has_int64_value)
                writer.writeInt64(5, this.int64_value);
            if (this.has_double_value)
                writer.writeDouble(6, this.double_value);
            if (this.has_string_value)
                writer.writeString(7, this.string_value);
            if (this.has_distribution_value)
                writer.writeMessage(8, this.distribution_value, () => this.distribution_value.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MetricValue {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MetricValue();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.labels as any, reader, reader.readString, reader.readString));
                        break;
                    case 2:
                        reader.readMessage(message.start_time, () => message.start_time = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.end_time, () => message.end_time = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 4:
                        message.bool_value = reader.readBool();
                        break;
                    case 5:
                        message.int64_value = reader.readInt64();
                        break;
                    case 6:
                        message.double_value = reader.readDouble();
                        break;
                    case 7:
                        message.string_value = reader.readString();
                        break;
                    case 8:
                        reader.readMessage(message.distribution_value, () => message.distribution_value = dependency_1.google.api.servicecontrol.v1.Distribution.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MetricValue {
            return MetricValue.deserialize(bytes);
        }
    }
    export class MetricValueSet extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            metric_name?: string;
            metric_values?: MetricValue[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("metric_name" in data && data.metric_name != undefined) {
                    this.metric_name = data.metric_name;
                }
                if ("metric_values" in data && data.metric_values != undefined) {
                    this.metric_values = data.metric_values;
                }
            }
        }
        get metric_name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set metric_name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get metric_values() {
            return pb_1.Message.getRepeatedWrapperField(this, MetricValue, 2) as MetricValue[];
        }
        set metric_values(value: MetricValue[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            metric_name?: string;
            metric_values?: ReturnType<typeof MetricValue.prototype.toObject>[];
        }): MetricValueSet {
            const message = new MetricValueSet({});
            if (data.metric_name != null) {
                message.metric_name = data.metric_name;
            }
            if (data.metric_values != null) {
                message.metric_values = data.metric_values.map(item => MetricValue.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                metric_name?: string;
                metric_values?: ReturnType<typeof MetricValue.prototype.toObject>[];
            } = {};
            if (this.metric_name != null) {
                data.metric_name = this.metric_name;
            }
            if (this.metric_values != null) {
                data.metric_values = this.metric_values.map((item: MetricValue) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.metric_name.length)
                writer.writeString(1, this.metric_name);
            if (this.metric_values.length)
                writer.writeRepeatedMessage(2, this.metric_values, (item: MetricValue) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MetricValueSet {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MetricValueSet();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.metric_name = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.metric_values, () => pb_1.Message.addToRepeatedWrapperField(message, 2, MetricValue.deserialize(reader), MetricValue));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MetricValueSet {
            return MetricValueSet.deserialize(bytes);
        }
    }
}