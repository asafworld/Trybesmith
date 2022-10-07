import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  public service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  getOrders = async (_req: Request, res: Response) => {
    const serviceAnswer = await this.service.getAll();
    if (!serviceAnswer) {
      return res.status(404).json({ message: 'No order found' });
    }
    return res.status(200).json(serviceAnswer);
  };
}
