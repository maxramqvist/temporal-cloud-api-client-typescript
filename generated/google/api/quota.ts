/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/quota.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class Quota extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            limits?: QuotaLimit[];
            metric_rules?: MetricRule[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("limits" in data && data.limits != undefined) {
                    this.limits = data.limits;
                }
                if ("metric_rules" in data && data.metric_rules != undefined) {
                    this.metric_rules = data.metric_rules;
                }
            }
        }
        get limits() {
            return pb_1.Message.getRepeatedWrapperField(this, QuotaLimit, 3) as QuotaLimit[];
        }
        set limits(value: QuotaLimit[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get metric_rules() {
            return pb_1.Message.getRepeatedWrapperField(this, MetricRule, 4) as MetricRule[];
        }
        set metric_rules(value: MetricRule[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        static fromObject(data: {
            limits?: ReturnType<typeof QuotaLimit.prototype.toObject>[];
            metric_rules?: ReturnType<typeof MetricRule.prototype.toObject>[];
        }): Quota {
            const message = new Quota({});
            if (data.limits != null) {
                message.limits = data.limits.map(item => QuotaLimit.fromObject(item));
            }
            if (data.metric_rules != null) {
                message.metric_rules = data.metric_rules.map(item => MetricRule.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                limits?: ReturnType<typeof QuotaLimit.prototype.toObject>[];
                metric_rules?: ReturnType<typeof MetricRule.prototype.toObject>[];
            } = {};
            if (this.limits != null) {
                data.limits = this.limits.map((item: QuotaLimit) => item.toObject());
            }
            if (this.metric_rules != null) {
                data.metric_rules = this.metric_rules.map((item: MetricRule) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.limits.length)
                writer.writeRepeatedMessage(3, this.limits, (item: QuotaLimit) => item.serialize(writer));
            if (this.metric_rules.length)
                writer.writeRepeatedMessage(4, this.metric_rules, (item: MetricRule) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Quota {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Quota();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 3:
                        reader.readMessage(message.limits, () => pb_1.Message.addToRepeatedWrapperField(message, 3, QuotaLimit.deserialize(reader), QuotaLimit));
                        break;
                    case 4:
                        reader.readMessage(message.metric_rules, () => pb_1.Message.addToRepeatedWrapperField(message, 4, MetricRule.deserialize(reader), MetricRule));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Quota {
            return Quota.deserialize(bytes);
        }
    }
    export class MetricRule extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            selector?: string;
            metric_costs?: Map<string, number>;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("selector" in data && data.selector != undefined) {
                    this.selector = data.selector;
                }
                if ("metric_costs" in data && data.metric_costs != undefined) {
                    this.metric_costs = data.metric_costs;
                }
            }
            if (!this.metric_costs)
                this.metric_costs = new Map();
        }
        get selector() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set selector(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get metric_costs() {
            return pb_1.Message.getField(this, 2) as any as Map<string, number>;
        }
        set metric_costs(value: Map<string, number>) {
            pb_1.Message.setField(this, 2, value as any);
        }
        static fromObject(data: {
            selector?: string;
            metric_costs?: {
                [key: string]: number;
            };
        }): MetricRule {
            const message = new MetricRule({});
            if (data.selector != null) {
                message.selector = data.selector;
            }
            if (typeof data.metric_costs == "object") {
                message.metric_costs = new Map(Object.entries(data.metric_costs));
            }
            return message;
        }
        toObject() {
            const data: {
                selector?: string;
                metric_costs?: {
                    [key: string]: number;
                };
            } = {};
            if (this.selector != null) {
                data.selector = this.selector;
            }
            if (this.metric_costs != null) {
                data.metric_costs = (Object.fromEntries)(this.metric_costs);
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.selector.length)
                writer.writeString(1, this.selector);
            for (const [key, value] of this.metric_costs) {
                writer.writeMessage(2, this.metric_costs, () => {
                    writer.writeString(1, key);
                    writer.writeInt64(2, value);
                });
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MetricRule {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MetricRule();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.selector = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.metric_costs as any, reader, reader.readString, reader.readInt64));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MetricRule {
            return MetricRule.deserialize(bytes);
        }
    }
    export class QuotaLimit extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            description?: string;
            default_limit?: number;
            max_limit?: number;
            free_tier?: number;
            duration?: string;
            metric?: string;
            unit?: string;
            values?: Map<string, number>;
            display_name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("default_limit" in data && data.default_limit != undefined) {
                    this.default_limit = data.default_limit;
                }
                if ("max_limit" in data && data.max_limit != undefined) {
                    this.max_limit = data.max_limit;
                }
                if ("free_tier" in data && data.free_tier != undefined) {
                    this.free_tier = data.free_tier;
                }
                if ("duration" in data && data.duration != undefined) {
                    this.duration = data.duration;
                }
                if ("metric" in data && data.metric != undefined) {
                    this.metric = data.metric;
                }
                if ("unit" in data && data.unit != undefined) {
                    this.unit = data.unit;
                }
                if ("values" in data && data.values != undefined) {
                    this.values = data.values;
                }
                if ("display_name" in data && data.display_name != undefined) {
                    this.display_name = data.display_name;
                }
            }
            if (!this.values)
                this.values = new Map();
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get default_limit() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set default_limit(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get max_limit() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set max_limit(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get free_tier() {
            return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
        }
        set free_tier(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        get duration() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set duration(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get metric() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set metric(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        get unit() {
            return pb_1.Message.getFieldWithDefault(this, 9, "") as string;
        }
        set unit(value: string) {
            pb_1.Message.setField(this, 9, value);
        }
        get values() {
            return pb_1.Message.getField(this, 10) as any as Map<string, number>;
        }
        set values(value: Map<string, number>) {
            pb_1.Message.setField(this, 10, value as any);
        }
        get display_name() {
            return pb_1.Message.getFieldWithDefault(this, 12, "") as string;
        }
        set display_name(value: string) {
            pb_1.Message.setField(this, 12, value);
        }
        static fromObject(data: {
            name?: string;
            description?: string;
            default_limit?: number;
            max_limit?: number;
            free_tier?: number;
            duration?: string;
            metric?: string;
            unit?: string;
            values?: {
                [key: string]: number;
            };
            display_name?: string;
        }): QuotaLimit {
            const message = new QuotaLimit({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.default_limit != null) {
                message.default_limit = data.default_limit;
            }
            if (data.max_limit != null) {
                message.max_limit = data.max_limit;
            }
            if (data.free_tier != null) {
                message.free_tier = data.free_tier;
            }
            if (data.duration != null) {
                message.duration = data.duration;
            }
            if (data.metric != null) {
                message.metric = data.metric;
            }
            if (data.unit != null) {
                message.unit = data.unit;
            }
            if (typeof data.values == "object") {
                message.values = new Map(Object.entries(data.values));
            }
            if (data.display_name != null) {
                message.display_name = data.display_name;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                description?: string;
                default_limit?: number;
                max_limit?: number;
                free_tier?: number;
                duration?: string;
                metric?: string;
                unit?: string;
                values?: {
                    [key: string]: number;
                };
                display_name?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.default_limit != null) {
                data.default_limit = this.default_limit;
            }
            if (this.max_limit != null) {
                data.max_limit = this.max_limit;
            }
            if (this.free_tier != null) {
                data.free_tier = this.free_tier;
            }
            if (this.duration != null) {
                data.duration = this.duration;
            }
            if (this.metric != null) {
                data.metric = this.metric;
            }
            if (this.unit != null) {
                data.unit = this.unit;
            }
            if (this.values != null) {
                data.values = (Object.fromEntries)(this.values);
            }
            if (this.display_name != null) {
                data.display_name = this.display_name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(6, this.name);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.default_limit != 0)
                writer.writeInt64(3, this.default_limit);
            if (this.max_limit != 0)
                writer.writeInt64(4, this.max_limit);
            if (this.free_tier != 0)
                writer.writeInt64(7, this.free_tier);
            if (this.duration.length)
                writer.writeString(5, this.duration);
            if (this.metric.length)
                writer.writeString(8, this.metric);
            if (this.unit.length)
                writer.writeString(9, this.unit);
            for (const [key, value] of this.values) {
                writer.writeMessage(10, this.values, () => {
                    writer.writeString(1, key);
                    writer.writeInt64(2, value);
                });
            }
            if (this.display_name.length)
                writer.writeString(12, this.display_name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuotaLimit {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuotaLimit();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 6:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        message.default_limit = reader.readInt64();
                        break;
                    case 4:
                        message.max_limit = reader.readInt64();
                        break;
                    case 7:
                        message.free_tier = reader.readInt64();
                        break;
                    case 5:
                        message.duration = reader.readString();
                        break;
                    case 8:
                        message.metric = reader.readString();
                        break;
                    case 9:
                        message.unit = reader.readString();
                        break;
                    case 10:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.values as any, reader, reader.readString, reader.readInt64));
                        break;
                    case 12:
                        message.display_name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuotaLimit {
            return QuotaLimit.deserialize(bytes);
        }
    }
}
