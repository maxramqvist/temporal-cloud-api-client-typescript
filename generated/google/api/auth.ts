/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: google/api/auth.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace google.api {
    export class Authentication extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            rules?: AuthenticationRule[];
            providers?: AuthProvider[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("rules" in data && data.rules != undefined) {
                    this.rules = data.rules;
                }
                if ("providers" in data && data.providers != undefined) {
                    this.providers = data.providers;
                }
            }
        }
        get rules() {
            return pb_1.Message.getRepeatedWrapperField(this, AuthenticationRule, 3) as AuthenticationRule[];
        }
        set rules(value: AuthenticationRule[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get providers() {
            return pb_1.Message.getRepeatedWrapperField(this, AuthProvider, 4) as AuthProvider[];
        }
        set providers(value: AuthProvider[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        static fromObject(data: {
            rules?: ReturnType<typeof AuthenticationRule.prototype.toObject>[];
            providers?: ReturnType<typeof AuthProvider.prototype.toObject>[];
        }): Authentication {
            const message = new Authentication({});
            if (data.rules != null) {
                message.rules = data.rules.map(item => AuthenticationRule.fromObject(item));
            }
            if (data.providers != null) {
                message.providers = data.providers.map(item => AuthProvider.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                rules?: ReturnType<typeof AuthenticationRule.prototype.toObject>[];
                providers?: ReturnType<typeof AuthProvider.prototype.toObject>[];
            } = {};
            if (this.rules != null) {
                data.rules = this.rules.map((item: AuthenticationRule) => item.toObject());
            }
            if (this.providers != null) {
                data.providers = this.providers.map((item: AuthProvider) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.rules.length)
                writer.writeRepeatedMessage(3, this.rules, (item: AuthenticationRule) => item.serialize(writer));
            if (this.providers.length)
                writer.writeRepeatedMessage(4, this.providers, (item: AuthProvider) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Authentication {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Authentication();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 3:
                        reader.readMessage(message.rules, () => pb_1.Message.addToRepeatedWrapperField(message, 3, AuthenticationRule.deserialize(reader), AuthenticationRule));
                        break;
                    case 4:
                        reader.readMessage(message.providers, () => pb_1.Message.addToRepeatedWrapperField(message, 4, AuthProvider.deserialize(reader), AuthProvider));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Authentication {
            return Authentication.deserialize(bytes);
        }
    }
    export class AuthenticationRule extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            selector?: string;
            oauth?: OAuthRequirements;
            allow_without_credential?: boolean;
            requirements?: AuthRequirement[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("selector" in data && data.selector != undefined) {
                    this.selector = data.selector;
                }
                if ("oauth" in data && data.oauth != undefined) {
                    this.oauth = data.oauth;
                }
                if ("allow_without_credential" in data && data.allow_without_credential != undefined) {
                    this.allow_without_credential = data.allow_without_credential;
                }
                if ("requirements" in data && data.requirements != undefined) {
                    this.requirements = data.requirements;
                }
            }
        }
        get selector() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set selector(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get oauth() {
            return pb_1.Message.getWrapperField(this, OAuthRequirements, 2) as OAuthRequirements;
        }
        set oauth(value: OAuthRequirements) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_oauth() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get allow_without_credential() {
            return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
        }
        set allow_without_credential(value: boolean) {
            pb_1.Message.setField(this, 5, value);
        }
        get requirements() {
            return pb_1.Message.getRepeatedWrapperField(this, AuthRequirement, 7) as AuthRequirement[];
        }
        set requirements(value: AuthRequirement[]) {
            pb_1.Message.setRepeatedWrapperField(this, 7, value);
        }
        static fromObject(data: {
            selector?: string;
            oauth?: ReturnType<typeof OAuthRequirements.prototype.toObject>;
            allow_without_credential?: boolean;
            requirements?: ReturnType<typeof AuthRequirement.prototype.toObject>[];
        }): AuthenticationRule {
            const message = new AuthenticationRule({});
            if (data.selector != null) {
                message.selector = data.selector;
            }
            if (data.oauth != null) {
                message.oauth = OAuthRequirements.fromObject(data.oauth);
            }
            if (data.allow_without_credential != null) {
                message.allow_without_credential = data.allow_without_credential;
            }
            if (data.requirements != null) {
                message.requirements = data.requirements.map(item => AuthRequirement.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                selector?: string;
                oauth?: ReturnType<typeof OAuthRequirements.prototype.toObject>;
                allow_without_credential?: boolean;
                requirements?: ReturnType<typeof AuthRequirement.prototype.toObject>[];
            } = {};
            if (this.selector != null) {
                data.selector = this.selector;
            }
            if (this.oauth != null) {
                data.oauth = this.oauth.toObject();
            }
            if (this.allow_without_credential != null) {
                data.allow_without_credential = this.allow_without_credential;
            }
            if (this.requirements != null) {
                data.requirements = this.requirements.map((item: AuthRequirement) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.selector.length)
                writer.writeString(1, this.selector);
            if (this.has_oauth)
                writer.writeMessage(2, this.oauth, () => this.oauth.serialize(writer));
            if (this.allow_without_credential != false)
                writer.writeBool(5, this.allow_without_credential);
            if (this.requirements.length)
                writer.writeRepeatedMessage(7, this.requirements, (item: AuthRequirement) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuthenticationRule {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthenticationRule();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.selector = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.oauth, () => message.oauth = OAuthRequirements.deserialize(reader));
                        break;
                    case 5:
                        message.allow_without_credential = reader.readBool();
                        break;
                    case 7:
                        reader.readMessage(message.requirements, () => pb_1.Message.addToRepeatedWrapperField(message, 7, AuthRequirement.deserialize(reader), AuthRequirement));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AuthenticationRule {
            return AuthenticationRule.deserialize(bytes);
        }
    }
    export class JwtLocation extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 4]];
        constructor(data?: any[] | ({
            value_prefix?: string;
        } & (({
            header?: string;
            query?: never;
            cookie?: never;
        } | {
            header?: never;
            query?: string;
            cookie?: never;
        } | {
            header?: never;
            query?: never;
            cookie?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("header" in data && data.header != undefined) {
                    this.header = data.header;
                }
                if ("query" in data && data.query != undefined) {
                    this.query = data.query;
                }
                if ("cookie" in data && data.cookie != undefined) {
                    this.cookie = data.cookie;
                }
                if ("value_prefix" in data && data.value_prefix != undefined) {
                    this.value_prefix = data.value_prefix;
                }
            }
        }
        get header() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set header(value: string) {
            pb_1.Message.setOneofField(this, 1, this.#one_of_decls[0], value);
        }
        get has_header() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get query() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set query(value: string) {
            pb_1.Message.setOneofField(this, 2, this.#one_of_decls[0], value);
        }
        get has_query() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get cookie() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set cookie(value: string) {
            pb_1.Message.setOneofField(this, 4, this.#one_of_decls[0], value);
        }
        get has_cookie() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get value_prefix() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set value_prefix(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get in() {
            const cases: {
                [index: number]: "none" | "header" | "query" | "cookie";
            } = {
                0: "none",
                1: "header",
                2: "query",
                4: "cookie"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 4])];
        }
        static fromObject(data: {
            header?: string;
            query?: string;
            cookie?: string;
            value_prefix?: string;
        }): JwtLocation {
            const message = new JwtLocation({});
            if (data.header != null) {
                message.header = data.header;
            }
            if (data.query != null) {
                message.query = data.query;
            }
            if (data.cookie != null) {
                message.cookie = data.cookie;
            }
            if (data.value_prefix != null) {
                message.value_prefix = data.value_prefix;
            }
            return message;
        }
        toObject() {
            const data: {
                header?: string;
                query?: string;
                cookie?: string;
                value_prefix?: string;
            } = {};
            if (this.header != null) {
                data.header = this.header;
            }
            if (this.query != null) {
                data.query = this.query;
            }
            if (this.cookie != null) {
                data.cookie = this.cookie;
            }
            if (this.value_prefix != null) {
                data.value_prefix = this.value_prefix;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_header)
                writer.writeString(1, this.header);
            if (this.has_query)
                writer.writeString(2, this.query);
            if (this.has_cookie)
                writer.writeString(4, this.cookie);
            if (this.value_prefix.length)
                writer.writeString(3, this.value_prefix);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): JwtLocation {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new JwtLocation();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.header = reader.readString();
                        break;
                    case 2:
                        message.query = reader.readString();
                        break;
                    case 4:
                        message.cookie = reader.readString();
                        break;
                    case 3:
                        message.value_prefix = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): JwtLocation {
            return JwtLocation.deserialize(bytes);
        }
    }
    export class AuthProvider extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            issuer?: string;
            jwks_uri?: string;
            audiences?: string;
            authorization_url?: string;
            jwt_locations?: JwtLocation[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("issuer" in data && data.issuer != undefined) {
                    this.issuer = data.issuer;
                }
                if ("jwks_uri" in data && data.jwks_uri != undefined) {
                    this.jwks_uri = data.jwks_uri;
                }
                if ("audiences" in data && data.audiences != undefined) {
                    this.audiences = data.audiences;
                }
                if ("authorization_url" in data && data.authorization_url != undefined) {
                    this.authorization_url = data.authorization_url;
                }
                if ("jwt_locations" in data && data.jwt_locations != undefined) {
                    this.jwt_locations = data.jwt_locations;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get issuer() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set issuer(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get jwks_uri() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set jwks_uri(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get audiences() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set audiences(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get authorization_url() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set authorization_url(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get jwt_locations() {
            return pb_1.Message.getRepeatedWrapperField(this, JwtLocation, 6) as JwtLocation[];
        }
        set jwt_locations(value: JwtLocation[]) {
            pb_1.Message.setRepeatedWrapperField(this, 6, value);
        }
        static fromObject(data: {
            id?: string;
            issuer?: string;
            jwks_uri?: string;
            audiences?: string;
            authorization_url?: string;
            jwt_locations?: ReturnType<typeof JwtLocation.prototype.toObject>[];
        }): AuthProvider {
            const message = new AuthProvider({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.issuer != null) {
                message.issuer = data.issuer;
            }
            if (data.jwks_uri != null) {
                message.jwks_uri = data.jwks_uri;
            }
            if (data.audiences != null) {
                message.audiences = data.audiences;
            }
            if (data.authorization_url != null) {
                message.authorization_url = data.authorization_url;
            }
            if (data.jwt_locations != null) {
                message.jwt_locations = data.jwt_locations.map(item => JwtLocation.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                issuer?: string;
                jwks_uri?: string;
                audiences?: string;
                authorization_url?: string;
                jwt_locations?: ReturnType<typeof JwtLocation.prototype.toObject>[];
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.issuer != null) {
                data.issuer = this.issuer;
            }
            if (this.jwks_uri != null) {
                data.jwks_uri = this.jwks_uri;
            }
            if (this.audiences != null) {
                data.audiences = this.audiences;
            }
            if (this.authorization_url != null) {
                data.authorization_url = this.authorization_url;
            }
            if (this.jwt_locations != null) {
                data.jwt_locations = this.jwt_locations.map((item: JwtLocation) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.issuer.length)
                writer.writeString(2, this.issuer);
            if (this.jwks_uri.length)
                writer.writeString(3, this.jwks_uri);
            if (this.audiences.length)
                writer.writeString(4, this.audiences);
            if (this.authorization_url.length)
                writer.writeString(5, this.authorization_url);
            if (this.jwt_locations.length)
                writer.writeRepeatedMessage(6, this.jwt_locations, (item: JwtLocation) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuthProvider {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthProvider();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.issuer = reader.readString();
                        break;
                    case 3:
                        message.jwks_uri = reader.readString();
                        break;
                    case 4:
                        message.audiences = reader.readString();
                        break;
                    case 5:
                        message.authorization_url = reader.readString();
                        break;
                    case 6:
                        reader.readMessage(message.jwt_locations, () => pb_1.Message.addToRepeatedWrapperField(message, 6, JwtLocation.deserialize(reader), JwtLocation));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AuthProvider {
            return AuthProvider.deserialize(bytes);
        }
    }
    export class OAuthRequirements extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            canonical_scopes?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("canonical_scopes" in data && data.canonical_scopes != undefined) {
                    this.canonical_scopes = data.canonical_scopes;
                }
            }
        }
        get canonical_scopes() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set canonical_scopes(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            canonical_scopes?: string;
        }): OAuthRequirements {
            const message = new OAuthRequirements({});
            if (data.canonical_scopes != null) {
                message.canonical_scopes = data.canonical_scopes;
            }
            return message;
        }
        toObject() {
            const data: {
                canonical_scopes?: string;
            } = {};
            if (this.canonical_scopes != null) {
                data.canonical_scopes = this.canonical_scopes;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.canonical_scopes.length)
                writer.writeString(1, this.canonical_scopes);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OAuthRequirements {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OAuthRequirements();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.canonical_scopes = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): OAuthRequirements {
            return OAuthRequirements.deserialize(bytes);
        }
    }
    export class AuthRequirement extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            provider_id?: string;
            audiences?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("provider_id" in data && data.provider_id != undefined) {
                    this.provider_id = data.provider_id;
                }
                if ("audiences" in data && data.audiences != undefined) {
                    this.audiences = data.audiences;
                }
            }
        }
        get provider_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set provider_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get audiences() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set audiences(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            provider_id?: string;
            audiences?: string;
        }): AuthRequirement {
            const message = new AuthRequirement({});
            if (data.provider_id != null) {
                message.provider_id = data.provider_id;
            }
            if (data.audiences != null) {
                message.audiences = data.audiences;
            }
            return message;
        }
        toObject() {
            const data: {
                provider_id?: string;
                audiences?: string;
            } = {};
            if (this.provider_id != null) {
                data.provider_id = this.provider_id;
            }
            if (this.audiences != null) {
                data.audiences = this.audiences;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.provider_id.length)
                writer.writeString(1, this.provider_id);
            if (this.audiences.length)
                writer.writeString(2, this.audiences);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuthRequirement {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRequirement();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.provider_id = reader.readString();
                        break;
                    case 2:
                        message.audiences = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AuthRequirement {
            return AuthRequirement.deserialize(bytes);
        }
    }
}
