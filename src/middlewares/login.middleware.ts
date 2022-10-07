import { Request, Response, NextFunction } from 'express';
import { Login } from '../Interfaces/Login.interface';

const checkName = (username: string) => {
  if (username === undefined || username === null || username === '') {
    return false;
  }
  return true;
};

const checkPassword = (password: string) => {
  if (password === undefined || password === null || password === '') {
    return false;
  }
  return true;
};

export default class LoginFieldsCheck {
  checkFields = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password }: Login = req.body;
    if (!checkName(username)) {
      return res.status(400).json({ message: '"username" is required' });
    }

    if (!checkPassword(password)) {
      return res.status(400).json({ message: '"password" is required' });
    }

    return next();    
  };
}