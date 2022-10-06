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

  getProducts = async (_req: Request, res: Response) => {
    console.log('oi');
    
    const serviceAnswer = await this.service.getAllService();
    console.log(serviceAnswer);
    
    if (!serviceAnswer) {
      return res.status(404).end();
    }
    return res.status(200).json(serviceAnswer);
  };
}