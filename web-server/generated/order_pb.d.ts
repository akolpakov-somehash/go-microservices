// package: order
// file: order.proto

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

export class OrderId extends jspb.Message { 
    getId(): number;
    setId(value: number): OrderId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderId.AsObject;
    static toObject(includeInstance: boolean, msg: OrderId): OrderId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderId;
    static deserializeBinaryFromReader(message: OrderId, reader: jspb.BinaryReader): OrderId;
}

export namespace OrderId {
    export type AsObject = {
        id: number,
    }
}

export class OrderItem extends jspb.Message { 
    getProductid(): number;
    setProductid(value: number): OrderItem;
    getQuantity(): number;
    setQuantity(value: number): OrderItem;
    getPrice(): number;
    setPrice(value: number): OrderItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderItem.AsObject;
    static toObject(includeInstance: boolean, msg: OrderItem): OrderItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderItem;
    static deserializeBinaryFromReader(message: OrderItem, reader: jspb.BinaryReader): OrderItem;
}

export namespace OrderItem {
    export type AsObject = {
        productid: number,
        quantity: number,
        price: number,
    }
}

export class Order extends jspb.Message { 
    getCustomerid(): number;
    setCustomerid(value: number): Order;
    clearItemsList(): void;
    getItemsList(): Array<OrderItem>;
    setItemsList(value: Array<OrderItem>): Order;
    addItems(value?: OrderItem, index?: number): OrderItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        customerid: number,
        itemsList: Array<OrderItem.AsObject>,
    }
}

export class OrderList extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<Order>;
    setOrdersList(value: Array<Order>): OrderList;
    addOrders(value?: Order, index?: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderList.AsObject;
    static toObject(includeInstance: boolean, msg: OrderList): OrderList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderList;
    static deserializeBinaryFromReader(message: OrderList, reader: jspb.BinaryReader): OrderList;
}

export namespace OrderList {
    export type AsObject = {
        ordersList: Array<Order.AsObject>,
    }
}

export class ProcessStatus extends jspb.Message { 
    getOrderid(): number;
    setOrderid(value: number): ProcessStatus;
    getStatus(): OrderStatus;
    setStatus(value: OrderStatus): ProcessStatus;
    getMessage(): string;
    setMessage(value: string): ProcessStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessStatus.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessStatus): ProcessStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessStatus;
    static deserializeBinaryFromReader(message: ProcessStatus, reader: jspb.BinaryReader): ProcessStatus;
}

export namespace ProcessStatus {
    export type AsObject = {
        orderid: number,
        status: OrderStatus,
        message: string,
    }
}

export enum OrderStatus {
    ERROR = 0,
    STARTED = 1,
    PROCESSED = 2,
    COMPLETED = 3,
}
