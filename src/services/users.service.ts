import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/users.model';
import { User } from '../Interfaces/Users.interface';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'secret';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async insertUser(user: User): Promise<string | null> {
    const { username, classe, level, password } = user;
    const model = await this.model.create({ username, classe, level, password });
    if (!model) {
      return null;
    }
    const token = jwt.sign({ data: { id: model.id, username } }, secret);
    return token;
  }
}