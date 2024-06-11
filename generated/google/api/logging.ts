/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/logging.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class Logging extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            producer_destinations?: Logging.LoggingDestination[];
            consumer_destinations?: Logging.LoggingDestination[];
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
            return pb_1.Message.getRepeatedWrapperField(this, Logging.LoggingDestination, 1) as Logging.LoggingDestination[];
        }
        set producer_destinations(value: Logging.LoggingDestination[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get consumer_destinations() {
            return pb_1.Message.getRepeatedWrapperField(this, Logging.LoggingDestination, 2) as Logging.LoggingDestination[];
        }
        set consumer_destinations(value: Logging.LoggingDestination[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            producer_destinations?: ReturnType<typeof Logging.LoggingDestination.prototype.toObject>[];
            consumer_destinations?: ReturnType<typeof Logging.LoggingDestination.prototype.toObject>[];
        }): Logging {
            const message = new Logging({});
            if (data.producer_destinations != null) {
                message.producer_destinations = data.producer_destinations.map(item => Logging.LoggingDestination.fromObject(item));
            }
            if (data.consumer_destinations != null) {
                message.consumer_destinations = data.consumer_destinations.map(item => Logging.LoggingDestination.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                producer_destinations?: ReturnType<typeof Logging.LoggingDestination.prototype.toObject>[];
                consumer_destinations?: ReturnType<typeof Logging.LoggingDestination.prototype.toObject>[];
            } = {};
            if (this.producer_destinations != null) {
                data.producer_destinations = this.producer_destinations.map((item: Logging.LoggingDestination) => item.toObject());
            }
            if (this.consumer_destinations != null) {
                data.consumer_destinations = this.consumer_destinations.map((item: Logging.LoggingDestination) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.producer_destinations.length)
                writer.writeRepeatedMessage(1, this.producer_destinations, (item: Logging.LoggingDestination) => item.serialize(writer));
            if (this.consumer_destinations.length)
                writer.writeRepeatedMessage(2, this.consumer_destinations, (item: Logging.LoggingDestination) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Logging {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Logging();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.producer_destinations, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Logging.LoggingDestination.deserialize(reader), Logging.LoggingDestination));
                        break;
                    case 2:
                        reader.readMessage(message.consumer_destinations, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Logging.LoggingDestination.deserialize(reader), Logging.LoggingDestination));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Logging {
            return Logging.deserialize(bytes);
        }
    }
    export namespace Logging {
        export class LoggingDestination extends pb_1.Message {
            #one_of_decls: number[][] = [];
            constructor(data?: any[] | {
                monitored_resource?: string;
                logs?: string[];
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("monitored_resource" in data && data.monitored_resource != undefined) {
                        this.monitored_resource = data.monitored_resource;
                    }
                    if ("logs" in data && data.logs != undefined) {
                        this.logs = data.logs;
                    }
                }
            }
            get monitored_resource() {
                return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
            }
            set monitored_resource(value: string) {
                pb_1.Message.setField(this, 3, value);
            }
            get logs() {
                return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
            }
            set logs(value: string[]) {
                pb_1.Message.setField(this, 1, value);
            }
            static fromObject(data: {
                monitored_resource?: string;
                logs?: string[];
            }): LoggingDestination {
                const message = new LoggingDestination({});
                if (data.monitored_resource != null) {
                    message.monitored_resource = data.monitored_resource;
                }
                if (data.logs != null) {
                    message.logs = data.logs;
                }
                return message;
            }
            toObject() {
                const data: {
                    monitored_resource?: string;
                    logs?: string[];
                } = {};
                if (this.monitored_resource != null) {
                    data.monitored_resource = this.monitored_resource;
                }
                if (this.logs != null) {
                    data.logs = this.logs;
                }
                return data;
            }
            serialize(): Uint8Array;
            serialize(w: pb_1.BinaryWriter): void;
            serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
                const writer = w || new pb_1.BinaryWriter();
                if (this.monitored_resource.length)
                    writer.writeString(3, this.monitored_resource);
                if (this.logs.length)
                    writer.writeRepeatedString(1, this.logs);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LoggingDestination {
                const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LoggingDestination();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 3:
                            message.monitored_resource = reader.readString();
                            break;
                        case 1:
                            pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): LoggingDestination {
                return LoggingDestination.deserialize(bytes);
            }
        }
    }
}
