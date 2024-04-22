// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var quote_pb = require('./quote_pb.js');

function serialize_quote_CustomerId(arg) {
  if (!(arg instanceof quote_pb.CustomerId)) {
    throw new Error('Expected argument of type quote.CustomerId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_CustomerId(buffer_arg) {
  return quote_pb.CustomerId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_ProductRequest(arg) {
  if (!(arg instanceof quote_pb.ProductRequest)) {
    throw new Error('Expected argument of type quote.ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_ProductRequest(buffer_arg) {
  return quote_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_Quote(arg) {
  if (!(arg instanceof quote_pb.Quote)) {
    throw new Error('Expected argument of type quote.Quote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_Quote(buffer_arg) {
  return quote_pb.Quote.deserializeBinary(new Uint8Array(buffer_arg));
}


var QuoteServiceService = exports.QuoteServiceService = {
  getQuote: {
    path: '/quote.QuoteService/GetQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.CustomerId,
    responseType: quote_pb.Quote,
    requestSerialize: serialize_quote_CustomerId,
    requestDeserialize: deserialize_quote_CustomerId,
    responseSerialize: serialize_quote_Quote,
    responseDeserialize: deserialize_quote_Quote,
  },
  addProduct: {
    path: '/quote.QuoteService/AddProduct',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.ProductRequest,
    responseType: quote_pb.Quote,
    requestSerialize: serialize_quote_ProductRequest,
    requestDeserialize: deserialize_quote_ProductRequest,
    responseSerialize: serialize_quote_Quote,
    responseDeserialize: deserialize_quote_Quote,
  },
  removeProduct: {
    path: '/quote.QuoteService/RemoveProduct',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.ProductRequest,
    responseType: quote_pb.Quote,
    requestSerialize: serialize_quote_ProductRequest,
    requestDeserialize: deserialize_quote_ProductRequest,
    responseSerialize: serialize_quote_Quote,
    responseDeserialize: deserialize_quote_Quote,
  },
  updateQuantity: {
    path: '/quote.QuoteService/UpdateQuantity',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.ProductRequest,
    responseType: quote_pb.Quote,
    requestSerialize: serialize_quote_ProductRequest,
    requestDeserialize: deserialize_quote_ProductRequest,
    responseSerialize: serialize_quote_Quote,
    responseDeserialize: deserialize_quote_Quote,
  },
};

exports.QuoteServiceClient = grpc.makeGenericClientConstructor(QuoteServiceService);
