import express from 'express';
import OrderController from '../controllers/orders.controller';

const route = express.Router();

const orderController = new OrderController();

route.get('/orders', orderController.getOrders);

export default route;