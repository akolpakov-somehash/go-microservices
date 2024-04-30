// package: order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as order_pb from "./order_pb";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrders: IOrderServiceService_IGetOrders;
    getOrder: IOrderServiceService_IGetOrder;
    placeOrder: IOrderServiceService_IPlaceOrder;
}

interface IOrderServiceService_IGetOrders extends grpc.MethodDefinition<order_pb.CustomerId, order_pb.OrderList> {
    path: "/order.OrderService/GetOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.CustomerId>;
    requestDeserialize: grpc.deserialize<order_pb.CustomerId>;
    responseSerialize: grpc.serialize<order_pb.OrderList>;
    responseDeserialize: grpc.deserialize<order_pb.OrderList>;
}
interface IOrderServiceService_IGetOrder extends grpc.MethodDefinition<order_pb.OrderId, order_pb.Order> {
    path: "/order.OrderService/GetOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.OrderId>;
    requestDeserialize: grpc.deserialize<order_pb.OrderId>;
    responseSerialize: grpc.serialize<order_pb.Order>;
    responseDeserialize: grpc.deserialize<order_pb.Order>;
}
interface IOrderServiceService_IPlaceOrder extends grpc.MethodDefinition<order_pb.CustomerId, order_pb.ProcessStatus> {
    path: "/order.OrderService/PlaceOrder";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<order_pb.CustomerId>;
    requestDeserialize: grpc.deserialize<order_pb.CustomerId>;
    responseSerialize: grpc.serialize<order_pb.ProcessStatus>;
    responseDeserialize: grpc.deserialize<order_pb.ProcessStatus>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer extends grpc.UntypedServiceImplementation {
    getOrders: grpc.handleUnaryCall<order_pb.CustomerId, order_pb.OrderList>;
    getOrder: grpc.handleUnaryCall<order_pb.OrderId, order_pb.Order>;
    placeOrder: grpc.handleServerStreamingCall<order_pb.CustomerId, order_pb.ProcessStatus>;
}

export interface IOrderServiceClient {
    getOrders(request: order_pb.CustomerId, callback: (error: grpc.ServiceError | null, response: order_pb.OrderList) => void): grpc.ClientUnaryCall;
    getOrders(request: order_pb.CustomerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.OrderList) => void): grpc.ClientUnaryCall;
    getOrders(request: order_pb.CustomerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.OrderList) => void): grpc.ClientUnaryCall;
    getOrder(request: order_pb.OrderId, callback: (error: grpc.ServiceError | null, response: order_pb.Order) => void): grpc.ClientUnaryCall;
    getOrder(request: order_pb.OrderId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.Order) => void): grpc.ClientUnaryCall;
    getOrder(request: order_pb.OrderId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.Order) => void): grpc.ClientUnaryCall;
    placeOrder(request: order_pb.CustomerId, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<order_pb.ProcessStatus>;
    placeOrder(request: order_pb.CustomerId, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<order_pb.ProcessStatus>;
}

export class OrderServiceClient extends grpc.Client implements IOrderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOrders(request: order_pb.CustomerId, callback: (error: grpc.ServiceError | null, response: order_pb.OrderList) => void): grpc.ClientUnaryCall;
    public getOrders(request: order_pb.CustomerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.OrderList) => void): grpc.ClientUnaryCall;
    public getOrders(request: order_pb.CustomerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.OrderList) => void): grpc.ClientUnaryCall;
    public getOrder(request: order_pb.OrderId, callback: (error: grpc.ServiceError | null, response: order_pb.Order) => void): grpc.ClientUnaryCall;
    public getOrder(request: order_pb.OrderId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.Order) => void): grpc.ClientUnaryCall;
    public getOrder(request: order_pb.OrderId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.Order) => void): grpc.ClientUnaryCall;
    public placeOrder(request: order_pb.CustomerId, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<order_pb.ProcessStatus>;
    public placeOrder(request: order_pb.CustomerId, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<order_pb.ProcessStatus>;
}
