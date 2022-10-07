import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  insertProduct = async (req: Request, res: Response) => {
    const serviceAnswer = await this.service.createService(req.body);
    if (!serviceAnswer) {
      return res.status(500).end();
    }
    return res.status(201).json(serviceAnswer);
  };

  getProducts = async (_req: Request, res: Response) => {
    const serviceAnswer = await this.service.getAllService();
    console.log(serviceAnswer);
    
    if (!serviceAnswer) {
      return res.status(404).end();
    }
    return res.status(200).json(serviceAnswer);
  };

  updateProducts = async (req: Request, res: Response) => {
    const { orderId, userId } = req.headers;
    console.log(req.body);
    const serviceAnswer = await this.service.updOrServ({ ...req.body, orderId, userId });
    if (!serviceAnswer) {
      return res.status(500).end();
    }
    return res.status(201).json(serviceAnswer);
  };
}