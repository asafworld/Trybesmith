import ProductModel from '../models/products.model';
import connection from '../models/connection';
import { Product, RegisteredProduct,
  UpdateOrders, Success } from '../Interfaces/Products.interface';

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

  public async updOrServ({ productsIds, orderId, userId }: UpdateOrders): Promise<Success | null> {
    const model = await this.model.updateOr({ productsIds, orderId, userId });
    if (!model) {
      return null;
    }
    return model;
  }
}