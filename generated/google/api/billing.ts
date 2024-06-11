/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/billing.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class Billing extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            consumer_destinations?: Billing.BillingDestination[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("consumer_destinations" in data && data.consumer_destinations != undefined) {
                    this.consumer_destinations = data.consumer_destinations;
                }
            }
        }
        get consumer_destinations() {
            return pb_1.Message.getRepeatedWrapperField(this, Billing.BillingDestination, 8) as Billing.BillingDestination[];
        }
        set consumer_destinations(value: Billing.BillingDestination[]) {
            pb_1.Message.setRepeatedWrapperField(this, 8, value);
        }
        static fromObject(data: {
            consumer_destinations?: ReturnType<typeof Billing.BillingDestination.prototype.toObject>[];
        }): Billing {
            const message = new Billing({});
            if (data.consumer_destinations != null) {
                message.consumer_destinations = data.consumer_destinations.map(item => Billing.BillingDestination.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                consumer_destinations?: ReturnType<typeof Billing.BillingDestination.prototype.toObject>[];
            } = {};
            if (this.consumer_destinations != null) {
                data.consumer_destinations = this.consumer_destinations.map((item: Billing.BillingDestination) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.consumer_destinations.length)
                writer.writeRepeatedMessage(8, this.consumer_destinations, (item: Billing.BillingDestination) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Billing {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Billing();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 8:
                        reader.readMessage(message.consumer_destinations, () => pb_1.Message.addToRepeatedWrapperField(message, 8, Billing.BillingDestination.deserialize(reader), Billing.BillingDestination));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Billing {
            return Billing.deserialize(bytes);
        }
    }
    export namespace Billing {
        export class BillingDestination extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                monitored_resource?: string;
                metrics?: string[];
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("monitored_resource" in data && data.monitored_resource != undefined) {
                        this.monitored_resource = data.monitored_resource;
                    }
                    if ("metrics" in data && data.metrics != undefined) {
                        this.metrics = data.metrics;
                    }
                }
            }
            get monitored_resource() {
                return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
            }
            set monitored_resource(value: string) {
                pb_1.Message.setField(this, 1, value);
            }
            get metrics() {
                return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
            }
            set metrics(value: string[]) {
                pb_1.Message.setField(this, 2, value);
            }
            static fromObject(data: {
                monitored_resource?: string;
                metrics?: string[];
            }): BillingDestination {
                const message = new BillingDestination({});
                if (data.monitored_resource != null) {
                    message.monitored_resource = data.monitored_resource;
                }
                if (data.metrics != null) {
                    message.metrics = data.metrics;
                }
                return message;
            }
            toObject() {
                const data: {
                    monitored_resource?: string;
                    metrics?: string[];
                } = {};
                if (this.monitored_resource != null) {
                    data.monitored_resource = this.monitored_resource;
                }
                if (this.metrics != null) {
                    data.metrics = this.metrics;
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.monitored_resource.length)
                    writer.writeString(1, this.monitored_resource);
                if (this.metrics.length)
                    writer.writeRepeatedString(2, this.metrics);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BillingDestination {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BillingDestination();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.monitored_resource = reader.readString();
                            break;
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
            static deserializeBinary(bytes: Uint8Array): BillingDestination {
                return BillingDestination.deserialize(bytes);
            }
        }
    }
}
