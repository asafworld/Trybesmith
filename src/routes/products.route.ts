import express from 'express';
import ProductController from '../controllers/products.controller';
import ProductsCheckFields from '../middlewares/product.middleware';

const route = express.Router();

const productController = new ProductController();
const productCheckFields = new ProductsCheckFields();
route.post('/products', productCheckFields.checkFields, productController.insertProduct);
route.get('/products', productController.getProducts);

export default route;