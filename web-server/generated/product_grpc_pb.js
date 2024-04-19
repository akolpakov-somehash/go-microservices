// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');

function serialize_product_Empty(arg) {
  if (!(arg instanceof product_pb.Empty)) {
    throw new Error('Expected argument of type product.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Empty(buffer_arg) {
  return product_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_Product(arg) {
  if (!(arg instanceof product_pb.Product)) {
    throw new Error('Expected argument of type product.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Product(buffer_arg) {
  return product_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductId(arg) {
  if (!(arg instanceof product_pb.ProductId)) {
    throw new Error('Expected argument of type product.ProductId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductId(buffer_arg) {
  return product_pb.ProductId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductList(arg) {
  if (!(arg instanceof product_pb.ProductList)) {
    throw new Error('Expected argument of type product.ProductList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductList(buffer_arg) {
  return product_pb.ProductList.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductInfoService = exports.ProductInfoService = {
  getProductInfo: {
    path: '/product.ProductInfo/GetProductInfo',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.ProductId,
    responseType: product_pb.Product,
    requestSerialize: serialize_product_ProductId,
    requestDeserialize: deserialize_product_ProductId,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  getProductList: {
    path: '/product.ProductInfo/GetProductList',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Empty,
    responseType: product_pb.ProductList,
    requestSerialize: serialize_product_Empty,
    requestDeserialize: deserialize_product_Empty,
    responseSerialize: serialize_product_ProductList,
    responseDeserialize: deserialize_product_ProductList,
  },
  addProduct: {
    path: '/product.ProductInfo/AddProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Product,
    responseType: product_pb.ProductId,
    requestSerialize: serialize_product_Product,
    requestDeserialize: deserialize_product_Product,
    responseSerialize: serialize_product_ProductId,
    responseDeserialize: deserialize_product_ProductId,
  },
  updateProduct: {
    path: '/product.ProductInfo/UpdateProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.Product,
    responseType: product_pb.Empty,
    requestSerialize: serialize_product_Product,
    requestDeserialize: deserialize_product_Product,
    responseSerialize: serialize_product_Empty,
    responseDeserialize: deserialize_product_Empty,
  },
  deleteProduct: {
    path: '/product.ProductInfo/DeleteProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.ProductId,
    responseType: product_pb.Empty,
    requestSerialize: serialize_product_ProductId,
    requestDeserialize: deserialize_product_ProductId,
    responseSerialize: serialize_product_Empty,
    responseDeserialize: deserialize_product_Empty,
  },
};

exports.ProductInfoClient = grpc.makeGenericClientConstructor(ProductInfoService);
