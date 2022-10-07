import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  login = async (req: Request, res: Response) => {
    const serviceAnswer = await this.service.loginService(req.body);
    if (!serviceAnswer.success) {
      return res.status(serviceAnswer.status as number).json({ message: serviceAnswer.message });
    }
    return res.status(serviceAnswer.status as number).json({ token: serviceAnswer.token });
  };
}