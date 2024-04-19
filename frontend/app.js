const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const express = require('express');
const cors = require('cors');

// Load the protobuf definitions
const packageDefinitionProduct = protoLoader.loadSync(
    path.join(__dirname, '../proto/catalog/product.proto'),
    { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
);

// Load the package definition
const productProto = grpc.loadPackageDefinition(packageDefinitionProduct).product;

// Create a stub for the ProductInfo service
const productStub = new productProto.ProductInfo('0.0.0.0:50051', grpc.credentials.createInsecure());

const app = express();
app.use(express.json());
app.use(cors());

const restPort = 3000;

app.get('/products', (req, res) => {
    productStub.getProductList({}, (err, products) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving product list');
        }
        try {
            res.send(products.products);
        } catch (error) {
            console.error('Error sending products:', error);
            res.status(500).send('Error processing products');
        }
    });
});


app.get('/products/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send('Product ID not set.');
        return;
    }
    
    productStub.getProductInfo({ id:req.params.id}, (err, product) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving product');
        }
        try {
            res.send(product);
        } catch (error) {
            console.error('Error sending product:', error);
            res.status(500).send('Error processing product');
        }
    });
});

app.listen(restPort, () => {
  console.log(`RESTful API is listening on port ${restPort}`)
});