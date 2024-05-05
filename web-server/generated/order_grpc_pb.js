// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var order_pb = require('./order_pb.js');

function serialize_order_CustomerId(arg) {
  if (!(arg instanceof order_pb.CustomerId)) {
    throw new Error('Expected argument of type order.CustomerId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CustomerId(buffer_arg) {
  return order_pb.CustomerId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_Order(arg) {
  if (!(arg instanceof order_pb.Order)) {
    throw new Error('Expected argument of type order.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_Order(buffer_arg) {
  return order_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_OrderId(arg) {
  if (!(arg instanceof order_pb.OrderId)) {
    throw new Error('Expected argument of type order.OrderId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_OrderId(buffer_arg) {
  return order_pb.OrderId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_OrderList(arg) {
  if (!(arg instanceof order_pb.OrderList)) {
    throw new Error('Expected argument of type order.OrderList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_OrderList(buffer_arg) {
  return order_pb.OrderList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_ProcessStatus(arg) {
  if (!(arg instanceof order_pb.ProcessStatus)) {
    throw new Error('Expected argument of type order.ProcessStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_ProcessStatus(buffer_arg) {
  return order_pb.ProcessStatus.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  getOrders: {
    path: '/order.OrderService/GetOrders',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CustomerId,
    responseType: order_pb.OrderList,
    requestSerialize: serialize_order_CustomerId,
    requestDeserialize: deserialize_order_CustomerId,
    responseSerialize: serialize_order_OrderList,
    responseDeserialize: deserialize_order_OrderList,
  },
  getOrder: {
    path: '/order.OrderService/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.OrderId,
    responseType: order_pb.Order,
    requestSerialize: serialize_order_OrderId,
    requestDeserialize: deserialize_order_OrderId,
    responseSerialize: serialize_order_Order,
    responseDeserialize: deserialize_order_Order,
  },
  placeOrder: {
    path: '/order.OrderService/PlaceOrder',
    requestStream: false,
    responseStream: true,
    requestType: order_pb.CustomerId,
    responseType: order_pb.ProcessStatus,
    requestSerialize: serialize_order_CustomerId,
    requestDeserialize: deserialize_order_CustomerId,
    responseSerialize: serialize_order_ProcessStatus,
    responseDeserialize: deserialize_order_ProcessStatus,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
