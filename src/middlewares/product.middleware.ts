import { Request, Response, NextFunction } from 'express';
// import { Product, RegisteredProduct } from '../Interfaces/Products.interface';

const checkName = (name: string) => {
  if (name === undefined || name === '') {
    return {
      status: 400,
      message: '"name" is required',
    };
  }
  if (typeof name !== 'string') {
    return {
      status: 422,
      message: '"name" must be a string',
    };
  }
  const nameArr = name.split('');
  if (nameArr.length <= 2) {
    return { status: 422, message: '"name" length must be at least 3 characters long' };
  }
  return { status: 200 };
};

const checkAmount = (amount: string) => {
  if (amount === undefined || amount === '') {
    return {
      status: 400,
      message: '"amount" is required',
    };
  }
  if (typeof amount !== 'string') {
    return {
      status: 422,
      message: '"amount" must be a string',
    };
  }
  const amountArr = amount.split('');
  if (amountArr.length <= 2) {
    return { status: 422, message: '"amount" length must be at least 3 characters long' };
  }
  return { status: 200 };
};

export default class ProductsCheckFields {
  checkFields = (req: Request, res: Response, next: NextFunction) => {
    const { name, amount } = req.body;
    const nameCheck = checkName(name);
    if (nameCheck.status !== 200) {
      return res.status(nameCheck.status).json({ message: nameCheck.message });
    }
    const amountCheck = checkAmount(amount);
    if (amountCheck.status !== 200) {
      return res.status(amountCheck.status).json({ message: amountCheck.message });
    }
    return next();
  };
}