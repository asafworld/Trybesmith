import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  public service: ProductService;

  // constructor(private productService = new ProductService()) {}
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
}