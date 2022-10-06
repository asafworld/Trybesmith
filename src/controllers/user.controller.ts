import { Request, Response } from 'express';
import UserService from '../services/users.service';

export default class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  inserUser = async (req: Request, res: Response) => {
    const serviceAnswer = await this.service.insertUser(req.body);
    if (!serviceAnswer) {
      res.status(500).end();
    }
    return res.status(201).json({ token: serviceAnswer });
  };
}