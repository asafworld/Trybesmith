import ProductModel from '../models/products.model';
import connection from '../models/connection';
import { Product, RegisteredProduct } from '../Interfaces/Products.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createService({ name, amount }: Product): Promise<RegisteredProduct | null> {
    const model = await this.model.create({ name, amount });
    return model;
  }

  public async getAllService(): Promise<RegisteredProduct[] | null> {
    const model = await this.model.getAll();
    return model;
  }
}