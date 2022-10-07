import { Request, Response, NextFunction } from 'express';
// import { Product, RegisteredProduct } from '../Interfaces/Products.interface';

const checkName = (username: string) => {
  if (username === undefined || username === '') {
    return {
      status: 400,
      message: '"username" is required',
    };
  }
  if (typeof username !== 'string') {
    return {
      status: 422,
      message: '"username" must be a string',
    };
  }
  const usernameArr = username.split('');
  if (usernameArr.length <= 2) {
    return { status: 422, message: '"username" length must be at least 3 characters long' };
  }
  return { status: 200 };
};

const checkClasse = (classe: string) => {
  if (classe === undefined || classe === '') {
    return {
      status: 400,
      message: '"classe" is required',
    };
  }
  if (typeof classe !== 'string') {
    return {
      status: 422,
      message: '"classe" must be a string',
    };
  }
  const classeArr = classe.split('');
  if (classeArr.length <= 2) {
    return { status: 422, message: '"classe" length must be at least 3 characters long' };
  }
  return { status: 200 };
};

const checkLevel = (level: number) => {
  if (level === undefined || level === null) {
    return {
      status: 400,
      message: '"level" is required',
    };
  }
  if (typeof level !== 'number') {
    return {
      status: 422,
      message: '"level" must be a number',
    };
  }
  if (level <= 0) {
    return { status: 422, message: '"level" must be greater than or equal to 1' };
  }
  return { status: 200 };
};

const checkPassword = (password: string) => {
  if (password === undefined || password === null) {
    return {
      status: 400,
      message: '"password" is required',
    };
  }
  if (typeof password !== 'string') {
    return {
      status: 422,
      message: '"password" must be a string',
    };
  }
  const passwordArr = password.split('');
  if (passwordArr.length <= 7) {
    return { status: 422, message: '"password" length must be at least 8 characters long' };
  }
  return { status: 200 };
};

export default class UsersCheckFields {
  checkFields = (req: Request, res: Response, next: NextFunction) => {
    const { username, classe, level, password } = req.body;
    const nameCheck = checkName(username);
    if (nameCheck.status !== 200) {
      return res.status(nameCheck.status).json({ message: nameCheck.message });
    }
    const classeCheck = checkClasse(classe);
    if (classeCheck.status !== 200) {
      return res.status(classeCheck.status).json({ message: classeCheck.message });
    }
    const levelCheck = checkLevel(level);
    if (levelCheck.status !== 200) {
      return res.status(levelCheck.status).json({ message: levelCheck.message });
    }
    const passwordCheck = checkPassword(password);
    if (passwordCheck.status !== 200) {
      return res.status(passwordCheck.status).json({ message: passwordCheck.message });
    }
    return next();
  };
}