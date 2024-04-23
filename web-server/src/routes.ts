import { Router, Request, Response } from 'express';
import { productStub, quoteStub } from './grpcClients';
import { Quote, ProductRequest, CustomerId } from '../generated/quote_pb';
import { Empty, Product, ProductId, ProductList } from '../generated/product_pb';
import env from './config';

const router = Router();

router.get('/products', (req: Request, res: Response) => {
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

router.get('/products/:id', (req: Request, res: Response) => {
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

router.post('/add-product/:id/:qty', (req: Request, res: Response) => {
    const productRequest = new ProductRequest();
    productRequest.setCustomerid(env.DEFAULT_USER_ID);
    productRequest.setProductid(Number(req.params.id));
    productRequest.setQuantity(Number(req.params.qty));


    quoteStub.addProduct(productRequest, (err, quote: Quote) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error adding product');
        }
        try {
            res.json(quote.toObject());
        } catch (error) {
            console.error('Error sending product:', error);
            res.status(500).send('Error processing product');
        }
    });
});

router.get('/quote/', (req: Request, res: Response) => {
    const customerId = new CustomerId();
    customerId.setId(env.DEFAULT_USER_ID);
    quoteStub.getQuote(customerId, (err, quote: Quote) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving quote');
        }
        try {
            res.json(quote.toObject());
        } catch (error) {
            console.error('Error sending quote:', error);
            res.status(500).send('Error processing quote');
        }
    });
});
// Add more routes here

export default router;