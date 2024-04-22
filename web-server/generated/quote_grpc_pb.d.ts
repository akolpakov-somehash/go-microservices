// package: quote
// file: quote.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as quote_pb from "./quote_pb";

interface IQuoteServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getQuote: IQuoteServiceService_IGetQuote;
    addProduct: IQuoteServiceService_IAddProduct;
    removeProduct: IQuoteServiceService_IRemoveProduct;
    updateQuantity: IQuoteServiceService_IUpdateQuantity;
}

interface IQuoteServiceService_IGetQuote extends grpc.MethodDefinition<quote_pb.CustomerId, quote_pb.Quote> {
    path: "/quote.QuoteService/GetQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.CustomerId>;
    requestDeserialize: grpc.deserialize<quote_pb.CustomerId>;
    responseSerialize: grpc.serialize<quote_pb.Quote>;
    responseDeserialize: grpc.deserialize<quote_pb.Quote>;
}
interface IQuoteServiceService_IAddProduct extends grpc.MethodDefinition<quote_pb.ProductRequest, quote_pb.Quote> {
    path: "/quote.QuoteService/AddProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<quote_pb.ProductRequest>;
    responseSerialize: grpc.serialize<quote_pb.Quote>;
    responseDeserialize: grpc.deserialize<quote_pb.Quote>;
}
interface IQuoteServiceService_IRemoveProduct extends grpc.MethodDefinition<quote_pb.ProductRequest, quote_pb.Quote> {
    path: "/quote.QuoteService/RemoveProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<quote_pb.ProductRequest>;
    responseSerialize: grpc.serialize<quote_pb.Quote>;
    responseDeserialize: grpc.deserialize<quote_pb.Quote>;
}
interface IQuoteServiceService_IUpdateQuantity extends grpc.MethodDefinition<quote_pb.ProductRequest, quote_pb.Quote> {
    path: "/quote.QuoteService/UpdateQuantity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<quote_pb.ProductRequest>;
    responseSerialize: grpc.serialize<quote_pb.Quote>;
    responseDeserialize: grpc.deserialize<quote_pb.Quote>;
}

export const QuoteServiceService: IQuoteServiceService;

export interface IQuoteServiceServer extends grpc.UntypedServiceImplementation {
    getQuote: grpc.handleUnaryCall<quote_pb.CustomerId, quote_pb.Quote>;
    addProduct: grpc.handleUnaryCall<quote_pb.ProductRequest, quote_pb.Quote>;
    removeProduct: grpc.handleUnaryCall<quote_pb.ProductRequest, quote_pb.Quote>;
    updateQuantity: grpc.handleUnaryCall<quote_pb.ProductRequest, quote_pb.Quote>;
}

export interface IQuoteServiceClient {
    getQuote(request: quote_pb.CustomerId, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    getQuote(request: quote_pb.CustomerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    getQuote(request: quote_pb.CustomerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    addProduct(request: quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    addProduct(request: quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    addProduct(request: quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    removeProduct(request: quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    removeProduct(request: quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    removeProduct(request: quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    updateQuantity(request: quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    updateQuantity(request: quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    updateQuantity(request: quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
}

export class QuoteServiceClient extends grpc.Client implements IQuoteServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getQuote(request: quote_pb.CustomerId, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public getQuote(request: quote_pb.CustomerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public getQuote(request: quote_pb.CustomerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public addProduct(request: quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public addProduct(request: quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public addProduct(request: quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public removeProduct(request: quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public removeProduct(request: quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public removeProduct(request: quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public updateQuantity(request: quote_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public updateQuantity(request: quote_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
    public updateQuantity(request: quote_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.Quote) => void): grpc.ClientUnaryCall;
}
