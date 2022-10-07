import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import { Product,
  RegisteredProduct, UpdateOrders, Success } from '../Interfaces/Products.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ name, amount }: Product): Promise<RegisteredProduct | null> {
    const modelAnswer = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) values (?,?)',
      [name, amount],
    );
    if (!modelAnswer) {
      return null;
    }
    const [insertedInfo] = modelAnswer;
    const { insertId } = insertedInfo;
    return { id: insertId, name, amount, orderId: null };
  }

  public async updateOr({ productsIds, orderId, userId }: UpdateOrders): Promise<Success | null> {
    console.log(productsIds, orderId, userId);
    const createEach = productsIds.map(async (id) => {
      const modelAnswer = await this.connection
        .execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
        [orderId, id],
      );
      if (!modelAnswer) {
        return false;
      }
      return true;
    });
    const result = await Promise.all(createEach);
    if (result.every((e) => e === true)) {
      return { userId, productsIds };
    }
    return null;
  }

  public async getAll(): Promise<RegisteredProduct[] | null> {
    const modelAnswer = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    if (!modelAnswer) {
      return null;
    }
    const [products] = modelAnswer;
    return products as RegisteredProduct[];
  }
}