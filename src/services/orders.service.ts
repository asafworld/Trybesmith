import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import Order from '../Interfaces/Orders.interface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[] | null> {
    const modelAnswer = await this.model.getAll();
    if (!modelAnswer) {
      return null;
    }
    return modelAnswer;
  }

  public async createOrderService(userId: number): Promise<number | null> {
    const modelAnswer = await this.model.create(userId);
    if (!modelAnswer) {
      return null;
    }
    return modelAnswer;
  }
}