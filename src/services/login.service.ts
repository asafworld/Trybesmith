import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import LoginModel from '../models/login.model';
import { Login, ServiceAnswer } from '../Interfaces/Login.interface';

dotenv.config();

const secret = 'secret';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async loginService({ username, password }: Login): Promise<ServiceAnswer> {
    const modelAnswer = await this.model.login({ username, password });
    if (!modelAnswer.success) {
      return { ...modelAnswer, token: null };
    }
    const token = jwt.sign({ data: { id: modelAnswer.id, username } }, secret);
    return { success: true,
      token,
      status: modelAnswer.status,
      message: modelAnswer.message,
      id: modelAnswer.id,
    };
  }
}