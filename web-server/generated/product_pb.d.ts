// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Product extends jspb.Message { 
    getId(): number;
    setId(value: number): Product;
    getName(): string;
    setName(value: string): Product;
    getSku(): string;
    setSku(value: string): Product;
    getDescription(): string;
    setDescription(value: string): Product;
    getPrice(): number;
    setPrice(value: number): Product;
    getImage(): string;
    setImage(value: string): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: number,
        name: string,
        sku: string,
        description: string,
        price: number,
        image: string,
    }
}

export class ProductId extends jspb.Message { 
    getId(): number;
    setId(value: number): ProductId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductId.AsObject;
    static toObject(includeInstance: boolean, msg: ProductId): ProductId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductId;
    static deserializeBinaryFromReader(message: ProductId, reader: jspb.BinaryReader): ProductId;
}

export namespace ProductId {
    export type AsObject = {
        id: number,
    }
}

export class ProductList extends jspb.Message { 

    getProductsMap(): jspb.Map<number, Product>;
    clearProductsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductList.AsObject;
    static toObject(includeInstance: boolean, msg: ProductList): ProductList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductList;
    static deserializeBinaryFromReader(message: ProductList, reader: jspb.BinaryReader): ProductList;
}

export namespace ProductList {
    export type AsObject = {

        productsMap: Array<[number, Product.AsObject]>,
    }
}

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
