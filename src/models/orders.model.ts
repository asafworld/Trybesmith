import { Pool, ResultSetHeader } from 'mysql2/promise';
// import { ResultSetHeader } from 'mysql2';
import Order from '../Interfaces/Orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[] | null> {
    const modelAnswer = await this.connection
      .execute(
        `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS "productsIds" 
        FROM Trybesmith.Orders AS o
        INNER JOIN Trybesmith.Products AS p ON p.orderId = o.id
        GROUP BY o.id`,
      );
    if (!modelAnswer) {
      return null;
    }
    const [data] = modelAnswer;
    return data as Order[];
  }

  public async create(userId: number): Promise<number | null> {
    const modelAnswer = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);
    if (!modelAnswer) {
      return null;
    }
    const [data] = modelAnswer;
    const { insertId } = data;
    return insertId;
  }
}
