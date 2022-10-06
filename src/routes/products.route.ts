import express from 'express';
import ProductController from '../controllers/products.controller';

const route = express.Router();

const productController = new ProductController();
route.post('/products', productController.insertProduct);

export default route;