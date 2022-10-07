import { Request, Response, NextFunction } from 'express';

const checkIds = (productsIds: number[]) => {
  if (productsIds === undefined) {
    return {
      status: 400,
      message: '"productsIds" is required',
    };
  }
  if (!Array.isArray(productsIds)) {
    return {
      status: 422,
      message: '"productsIds" must be an array',
    };
  }
  if (productsIds.length === 0) {
    return { status: 422, message: '"productsIds" must include only numbers' };
  }
  return { status: 200 };
};

export default class CheckProductsIds {
  checkFields = (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;
    console.log(productsIds);
    const idCheck = checkIds(productsIds);
    if (idCheck.status !== 200) {
      return res.status(idCheck.status).json({ message: idCheck.message });
    }
    return next();
  };
}