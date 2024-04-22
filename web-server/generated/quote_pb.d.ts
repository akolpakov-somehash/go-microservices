// package: quote
// file: quote.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class CustomerId extends jspb.Message { 
    getId(): number;
    setId(value: number): CustomerId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerId.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerId): CustomerId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerId;
    static deserializeBinaryFromReader(message: CustomerId, reader: jspb.BinaryReader): CustomerId;
}

export namespace CustomerId {
    export type AsObject = {
        id: number,
    }
}

export class QuoteItem extends jspb.Message { 
    getProductid(): number;
    setProductid(value: number): QuoteItem;
    getQuantity(): number;
    setQuantity(value: number): QuoteItem;
    getPrice(): number;
    setPrice(value: number): QuoteItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteItem.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteItem): QuoteItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuoteItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteItem;
    static deserializeBinaryFromReader(message: QuoteItem, reader: jspb.BinaryReader): QuoteItem;
}

export namespace QuoteItem {
    export type AsObject = {
        productid: number,
        quantity: number,
        price: number,
    }
}

export class Quote extends jspb.Message { 
    getCustomerid(): number;
    setCustomerid(value: number): Quote;
    clearItemsList(): void;
    getItemsList(): Array<QuoteItem>;
    setItemsList(value: Array<QuoteItem>): Quote;
    addItems(value?: QuoteItem, index?: number): QuoteItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quote.AsObject;
    static toObject(includeInstance: boolean, msg: Quote): Quote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quote;
    static deserializeBinaryFromReader(message: Quote, reader: jspb.BinaryReader): Quote;
}

export namespace Quote {
    export type AsObject = {
        customerid: number,
        itemsList: Array<QuoteItem.AsObject>,
    }
}

export class ProductRequest extends jspb.Message { 
    getCustomerid(): number;
    setCustomerid(value: number): ProductRequest;
    getProductid(): number;
    setProductid(value: number): ProductRequest;
    getQuantity(): number;
    setQuantity(value: number): ProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductRequest;
    static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
    export type AsObject = {
        customerid: number,
        productid: number,
        quantity: number,
    }
}
