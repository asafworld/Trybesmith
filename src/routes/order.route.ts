import express from 'express';
import OrderController from '../controllers/orders.controller';
import ProductController from '../controllers/products.controller';
import CheckToken from '../middlewares/checkToken.middleware';
import CheckProductsIds from '../middlewares/productsIds.middleware';

const route = express.Router();

const orderController = new OrderController();
const productController = new ProductController();
const token = new CheckToken();
const checkProductsIds = new CheckProductsIds();

route.get('/orders', orderController.getOrders);
route.post(
  '/orders',
  token.isTokenValid,
  checkProductsIds.checkFields,
  orderController.createOrders,
  productController.updateProducts,
);

export default route;