import express, { Request, Response } from 'express';
import cors from 'cors';
import { credentials } from '@grpc/grpc-js';
import { ProductInfoClient } from '../generated/product_grpc_pb';
import { Empty, Product, ProductId, ProductList } from '../generated/product_pb';
import jwt from 'jsonwebtoken';


// Load the package definition

// Create a stub for the ProductInfo service
const productStub = new ProductInfoClient('localhost:50051', credentials.createInsecure());

const app = express();
app.use(express.json());
app.use(cors());

const restPort = 3000;

const JWT_SECRET = 'your_secret_key';

const defaultUserId = '-1';

// Middleware to validate JWT
const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // If token is not present, create a new one
    if (token == null) {
        const newUser = { id: defaultUserId, name: 'Default User' }; // Define default user properties
        const newToken = jwt.sign(newUser, JWT_SECRET, { expiresIn: '1h' }); // Set an expiration for security
        (req as any).user = newUser;
        req.headers['authorization'] = `Bearer ${newToken}`; // Optionally add the new token to headers
        next(); // Proceed with the request
    } else {
        // Verify the existing token
        jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
            if (err) return res.sendStatus(403); // Forbidden if token is invalid
            (req as any).user = user;
            next();
        });
    }
};

app.get('/products', authenticateToken, (req: Request, res: Response) => {
    productStub.getProductList(new Empty(), (err, products: ProductList) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving product list');
        }
        try {
            const productsArray = products.toObject().productsMap.map(([i, product]: [number, Product.AsObject]) => product);
            res.json(productsArray);
        } catch (error) {
            console.error('Error sending products:', error);
            res.status(500).send('Error processing products');
        }
    });
});

app.get('/products/:id', (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(400).send('Product ID not set.');
        return;
    }
    const productId = new ProductId();
    productId.setId(Number(req.params.id)); // Convert the string to a number before setting it as the ID

    productStub.getProductInfo(productId, (err, product: Product) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving product');
        }
        try {
            res.json(product.toObject());
        } catch (error) {
            console.error('Error sending product:', error);
            res.status(500).send('Error processing product');
        }
    });
});

app.listen(restPort, () => {
    console.log(`RESTful API is listening on port ${restPort}`);
});
