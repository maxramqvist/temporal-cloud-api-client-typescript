/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/monitoring.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class Monitoring extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            producer_destinations?: Monitoring.MonitoringDestination[];
            consumer_destinations?: Monitoring.MonitoringDestination[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("producer_destinations" in data && data.producer_destinations != undefined) {
                    this.producer_destinations = data.producer_destinations;
                }
                if ("consumer_destinations" in data && data.consumer_destinations != undefined) {
                    this.consumer_destinations = data.consumer_destinations;
                }
            }
        }
        get producer_destinations() {
            return pb_1.Message.getRepeatedWrapperField(this, Monitoring.MonitoringDestination, 1) as Monitoring.MonitoringDestination[];
        }
        set producer_destinations(value: Monitoring.MonitoringDestination[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get consumer_destinations() {
            return pb_1.Message.getRepeatedWrapperField(this, Monitoring.MonitoringDestination, 2) as Monitoring.MonitoringDestination[];
        }
        set consumer_destinations(value: Monitoring.MonitoringDestination[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            producer_destinations?: ReturnType<typeof Monitoring.MonitoringDestination.prototype.toObject>[];
            consumer_destinations?: ReturnType<typeof Monitoring.MonitoringDestination.prototype.toObject>[];
        }): Monitoring {
            const message = new Monitoring({});
            if (data.producer_destinations != null) {
                message.producer_destinations = data.producer_destinations.map(item => Monitoring.MonitoringDestination.fromObject(item));
            }
            if (data.consumer_destinations != null) {
                message.consumer_destinations = data.consumer_destinations.map(item => Monitoring.MonitoringDestination.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                producer_destinations?: ReturnType<typeof Monitoring.MonitoringDestination.prototype.toObject>[];
                consumer_destinations?: ReturnType<typeof Monitoring.MonitoringDestination.prototype.toObject>[];
            } = {};
            if (this.producer_destinations != null) {
                data.producer_destinations = this.producer_destinations.map((item: Monitoring.MonitoringDestination) => item.toObject());
            }
            if (this.consumer_destinations != null) {
                data.consumer_destinations = this.consumer_destinations.map((item: Monitoring.MonitoringDestination) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.producer_destinations.length)
                writer.writeRepeatedMessage(1, this.producer_destinations, (item: Monitoring.MonitoringDestination) => item.serialize(writer));
            if (this.consumer_destinations.length)
                writer.writeRepeatedMessage(2, this.consumer_destinations, (item: Monitoring.MonitoringDestination) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Monitoring {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Monitoring();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.producer_destinations, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Monitoring.MonitoringDestination.deserialize(reader), Monitoring.MonitoringDestination));
                        break;
                    case 2:
                        reader.readMessage(message.consumer_destinations, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Monitoring.MonitoringDestination.deserialize(reader), Monitoring.MonitoringDestination));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Monitoring {
            return Monitoring.deserialize(bytes);
        }
    }
    export namespace Monitoring {
        export class MonitoringDestination extends pb_1.Message {
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
            }): MonitoringDestination {
                const message = new MonitoringDestination({});
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
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MonitoringDestination {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MonitoringDestination();
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
            static deserializeBinary(bytes: Uint8Array): MonitoringDestination {
                return MonitoringDestination.deserialize(bytes);
            }
        }
    }
}
