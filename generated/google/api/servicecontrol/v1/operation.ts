/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/servicecontrol/v1/operation.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./log_entry";
import * as dependency_2 from "./metric_value";
import * as dependency_3 from "./../../../protobuf/any";
import * as dependency_4 from "./../../../protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export namespace google.api.servicecontrol.v1 {
    export class Operation extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            operation_id?: string;
            operation_name?: string;
            consumer_id?: string;
            start_time?: dependency_4.google.protobuf.Timestamp;
            end_time?: dependency_4.google.protobuf.Timestamp;
            labels?: Map<string, string>;
            metric_value_sets?: dependency_2.google.api.servicecontrol.v1.MetricValueSet[];
            log_entries?: dependency_1.google.api.servicecontrol.v1.LogEntry[];
            importance?: Operation.Importance;
            extensions?: dependency_3.google.protobuf.Any[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7, 8, 16], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("operation_id" in data && data.operation_id != undefined) {
                    this.operation_id = data.operation_id;
                }
                if ("operation_name" in data && data.operation_name != undefined) {
                    this.operation_name = data.operation_name;
                }
                if ("consumer_id" in data && data.consumer_id != undefined) {
                    this.consumer_id = data.consumer_id;
                }
                if ("start_time" in data && data.start_time != undefined) {
                    this.start_time = data.start_time;
                }
                if ("end_time" in data && data.end_time != undefined) {
                    this.end_time = data.end_time;
                }
                if ("labels" in data && data.labels != undefined) {
                    this.labels = data.labels;
                }
                if ("metric_value_sets" in data && data.metric_value_sets != undefined) {
                    this.metric_value_sets = data.metric_value_sets;
                }
                if ("log_entries" in data && data.log_entries != undefined) {
                    this.log_entries = data.log_entries;
                }
                if ("importance" in data && data.importance != undefined) {
                    this.importance = data.importance;
                }
                if ("extensions" in data && data.extensions != undefined) {
                    this.extensions = data.extensions;
                }
            }
            if (!this.labels)
                this.labels = new Map();
        }
        get operation_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set operation_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get operation_name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set operation_name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get consumer_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set consumer_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get start_time() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 4) as dependency_4.google.protobuf.Timestamp;
        }
        set start_time(value: dependency_4.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_start_time() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get end_time() {
            return pb_1.Message.getWrapperField(this, dependency_4.google.protobuf.Timestamp, 5) as dependency_4.google.protobuf.Timestamp;
        }
        set end_time(value: dependency_4.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_end_time() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get labels() {
            return pb_1.Message.getField(this, 6) as any as Map<string, string>;
        }
        set labels(value: Map<string, string>) {
            pb_1.Message.setField(this, 6, value as any);
        }
        get metric_value_sets() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.google.api.servicecontrol.v1.MetricValueSet, 7) as dependency_2.google.api.servicecontrol.v1.MetricValueSet[];
        }
        set metric_value_sets(value: dependency_2.google.api.servicecontrol.v1.MetricValueSet[]) {
            pb_1.Message.setRepeatedWrapperField(this, 7, value);
        }
        get log_entries() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.google.api.servicecontrol.v1.LogEntry, 8) as dependency_1.google.api.servicecontrol.v1.LogEntry[];
        }
        set log_entries(value: dependency_1.google.api.servicecontrol.v1.LogEntry[]) {
            pb_1.Message.setRepeatedWrapperField(this, 8, value);
        }
        get importance() {
            return pb_1.Message.getFieldWithDefault(this, 11, Operation.Importance.LOW) as Operation.Importance;
        }
        set importance(value: Operation.Importance) {
            pb_1.Message.setField(this, 11, value);
        }
        get extensions() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.google.protobuf.Any, 16) as dependency_3.google.protobuf.Any[];
        }
        set extensions(value: dependency_3.google.protobuf.Any[]) {
            pb_1.Message.setRepeatedWrapperField(this, 16, value);
        }
        static fromObject(data: {
            operation_id?: string;
            operation_name?: string;
            consumer_id?: string;
            start_time?: ReturnType<typeof dependency_4.google.protobuf.Timestamp.prototype.toObject>;
            end_time?: ReturnType<typeof dependency_4.google.protobuf.Timestamp.prototype.toObject>;
            labels?: {
                [key: string]: string;
            };
            metric_value_sets?: ReturnType<typeof dependency_2.google.api.servicecontrol.v1.MetricValueSet.prototype.toObject>[];
            log_entries?: ReturnType<typeof dependency_1.google.api.servicecontrol.v1.LogEntry.prototype.toObject>[];
            importance?: Operation.Importance;
            extensions?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>[];
        }): Operation {
            const message = new Operation({});
            if (data.operation_id != null) {
                message.operation_id = data.operation_id;
            }
            if (data.operation_name != null) {
                message.operation_name = data.operation_name;
            }
            if (data.consumer_id != null) {
                message.consumer_id = data.consumer_id;
            }
            if (data.start_time != null) {
                message.start_time = dependency_4.google.protobuf.Timestamp.fromObject(data.start_time);
            }
            if (data.end_time != null) {
                message.end_time = dependency_4.google.protobuf.Timestamp.fromObject(data.end_time);
            }
            if (typeof data.labels == "object") {
                message.labels = new Map(Object.entries(data.labels));
            }
            if (data.metric_value_sets != null) {
                message.metric_value_sets = data.metric_value_sets.map(item => dependency_2.google.api.servicecontrol.v1.MetricValueSet.fromObject(item));
            }
            if (data.log_entries != null) {
                message.log_entries = data.log_entries.map(item => dependency_1.google.api.servicecontrol.v1.LogEntry.fromObject(item));
            }
            if (data.importance != null) {
                message.importance = data.importance;
            }
            if (data.extensions != null) {
                message.extensions = data.extensions.map(item => dependency_3.google.protobuf.Any.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                operation_id?: string;
                operation_name?: string;
                consumer_id?: string;
                start_time?: ReturnType<typeof dependency_4.google.protobuf.Timestamp.prototype.toObject>;
                end_time?: ReturnType<typeof dependency_4.google.protobuf.Timestamp.prototype.toObject>;
                labels?: {
                    [key: string]: string;
                };
                metric_value_sets?: ReturnType<typeof dependency_2.google.api.servicecontrol.v1.MetricValueSet.prototype.toObject>[];
                log_entries?: ReturnType<typeof dependency_1.google.api.servicecontrol.v1.LogEntry.prototype.toObject>[];
                importance?: Operation.Importance;
                extensions?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>[];
            } = {};
            if (this.operation_id != null) {
                data.operation_id = this.operation_id;
            }
            if (this.operation_name != null) {
                data.operation_name = this.operation_name;
            }
            if (this.consumer_id != null) {
                data.consumer_id = this.consumer_id;
            }
            if (this.start_time != null) {
                data.start_time = this.start_time.toObject();
            }
            if (this.end_time != null) {
                data.end_time = this.end_time.toObject();
            }
            if (this.labels != null) {
                data.labels = (Object.fromEntries)(this.labels);
            }
            if (this.metric_value_sets != null) {
                data.metric_value_sets = this.metric_value_sets.map((item: dependency_2.google.api.servicecontrol.v1.MetricValueSet) => item.toObject());
            }
            if (this.log_entries != null) {
                data.log_entries = this.log_entries.map((item: dependency_1.google.api.servicecontrol.v1.LogEntry) => item.toObject());
            }
            if (this.importance != null) {
                data.importance = this.importance;
            }
            if (this.extensions != null) {
                data.extensions = this.extensions.map((item: dependency_3.google.protobuf.Any) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.operation_id.length)
                writer.writeString(1, this.operation_id);
            if (this.operation_name.length)
                writer.writeString(2, this.operation_name);
            if (this.consumer_id.length)
                writer.writeString(3, this.consumer_id);
            if (this.has_start_time)
                writer.writeMessage(4, this.start_time, () => this.start_time.serialize(writer));
            if (this.has_end_time)
                writer.writeMessage(5, this.end_time, () => this.end_time.serialize(writer));
            for (const [key, value] of this.labels) {
                writer.writeMessage(6, this.labels, () => {
                    writer.writeString(1, key);
                    writer.writeString(2, value);
                });
            }
            if (this.metric_value_sets.length)
                writer.writeRepeatedMessage(7, this.metric_value_sets, (item: dependency_2.google.api.servicecontrol.v1.MetricValueSet) => item.serialize(writer));
            if (this.log_entries.length)
                writer.writeRepeatedMessage(8, this.log_entries, (item: dependency_1.google.api.servicecontrol.v1.LogEntry) => item.serialize(writer));
            if (this.importance != Operation.Importance.LOW)
                writer.writeEnum(11, this.importance);
            if (this.extensions.length)
                writer.writeRepeatedMessage(16, this.extensions, (item: dependency_3.google.protobuf.Any) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Operation {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Operation();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.operation_id = reader.readString();
                        break;
                    case 2:
                        message.operation_name = reader.readString();
                        break;
                    case 3:
                        message.consumer_id = reader.readString();
                        break;
                    case 4:
                        reader.readMessage(message.start_time, () => message.start_time = dependency_4.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.end_time, () => message.end_time = dependency_4.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 6:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.labels as any, reader, reader.readString, reader.readString));
                        break;
                    case 7:
                        reader.readMessage(message.metric_value_sets, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_2.google.api.servicecontrol.v1.MetricValueSet.deserialize(reader), dependency_2.google.api.servicecontrol.v1.MetricValueSet));
                        break;
                    case 8:
                        reader.readMessage(message.log_entries, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_1.google.api.servicecontrol.v1.LogEntry.deserialize(reader), dependency_1.google.api.servicecontrol.v1.LogEntry));
                        break;
                    case 11:
                        message.importance = reader.readEnum();
                        break;
                    case 16:
                        reader.readMessage(message.extensions, () => pb_1.Message.addToRepeatedWrapperField(message, 16, dependency_3.google.protobuf.Any.deserialize(reader), dependency_3.google.protobuf.Any));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Operation {
            return Operation.deserialize(bytes);
        }
    }
    export namespace Operation {
        export enum Importance {
            LOW = 0,
            HIGH = 1
        }
    }
}
