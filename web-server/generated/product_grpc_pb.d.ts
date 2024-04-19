// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as product_pb from "./product_pb";

interface IProductInfoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProductInfo: IProductInfoService_IGetProductInfo;
    getProductList: IProductInfoService_IGetProductList;
    addProduct: IProductInfoService_IAddProduct;
    updateProduct: IProductInfoService_IUpdateProduct;
    deleteProduct: IProductInfoService_IDeleteProduct;
}

interface IProductInfoService_IGetProductInfo extends grpc.MethodDefinition<product_pb.ProductId, product_pb.Product> {
    path: "/product.ProductInfo/GetProductInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.ProductId>;
    requestDeserialize: grpc.deserialize<product_pb.ProductId>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}
interface IProductInfoService_IGetProductList extends grpc.MethodDefinition<product_pb.Empty, product_pb.ProductList> {
    path: "/product.ProductInfo/GetProductList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Empty>;
    requestDeserialize: grpc.deserialize<product_pb.Empty>;
    responseSerialize: grpc.serialize<product_pb.ProductList>;
    responseDeserialize: grpc.deserialize<product_pb.ProductList>;
}
interface IProductInfoService_IAddProduct extends grpc.MethodDefinition<product_pb.Product, product_pb.ProductId> {
    path: "/product.ProductInfo/AddProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Product>;
    requestDeserialize: grpc.deserialize<product_pb.Product>;
    responseSerialize: grpc.serialize<product_pb.ProductId>;
    responseDeserialize: grpc.deserialize<product_pb.ProductId>;
}
interface IProductInfoService_IUpdateProduct extends grpc.MethodDefinition<product_pb.Product, product_pb.Empty> {
    path: "/product.ProductInfo/UpdateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.Product>;
    requestDeserialize: grpc.deserialize<product_pb.Product>;
    responseSerialize: grpc.serialize<product_pb.Empty>;
    responseDeserialize: grpc.deserialize<product_pb.Empty>;
}
interface IProductInfoService_IDeleteProduct extends grpc.MethodDefinition<product_pb.ProductId, product_pb.Empty> {
    path: "/product.ProductInfo/DeleteProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.ProductId>;
    requestDeserialize: grpc.deserialize<product_pb.ProductId>;
    responseSerialize: grpc.serialize<product_pb.Empty>;
    responseDeserialize: grpc.deserialize<product_pb.Empty>;
}

export const ProductInfoService: IProductInfoService;

export interface IProductInfoServer extends grpc.UntypedServiceImplementation {
    getProductInfo: grpc.handleUnaryCall<product_pb.ProductId, product_pb.Product>;
    getProductList: grpc.handleUnaryCall<product_pb.Empty, product_pb.ProductList>;
    addProduct: grpc.handleUnaryCall<product_pb.Product, product_pb.ProductId>;
    updateProduct: grpc.handleUnaryCall<product_pb.Product, product_pb.Empty>;
    deleteProduct: grpc.handleUnaryCall<product_pb.ProductId, product_pb.Empty>;
}

export interface IProductInfoClient {
    getProductInfo(request: product_pb.ProductId, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProductInfo(request: product_pb.ProductId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProductInfo(request: product_pb.ProductId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProductList(request: product_pb.Empty, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    getProductList(request: product_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    getProductList(request: product_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    addProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.ProductId) => void): grpc.ClientUnaryCall;
    addProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductId) => void): grpc.ClientUnaryCall;
    addProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductId) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.ProductId, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.ProductId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.ProductId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ProductInfoClient extends grpc.Client implements IProductInfoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getProductInfo(request: product_pb.ProductId, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProductInfo(request: product_pb.ProductId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProductInfo(request: product_pb.ProductId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProductList(request: product_pb.Empty, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    public getProductList(request: product_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    public getProductList(request: product_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductList) => void): grpc.ClientUnaryCall;
    public addProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.ProductId) => void): grpc.ClientUnaryCall;
    public addProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductId) => void): grpc.ClientUnaryCall;
    public addProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductId) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.Product, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.ProductId, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.ProductId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.ProductId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Empty) => void): grpc.ClientUnaryCall;
}
