import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import { User, RegisteredUser } from '../Interfaces/Users.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, level, password }: User): Promise<RegisteredUser | null> {
    const modelAnswer = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    if (!modelAnswer) {
      return null;
    }
    const [data] = modelAnswer;
    const { insertId } = data;
    return { id: insertId, username, classe, level, password };
  }
}