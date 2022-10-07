import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserService from '../services/users.service';

dotenv.config();

const secret = 'secret'; 

export default class CheckToken {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }
  
  isTokenValid = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (authorization === undefined) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const decoded: any = jwt.verify(authorization, secret);
      const check = await this.service.getUserById(decoded.data.id);
      if (!check) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.headers.userId = decoded.data.id;
      return next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}