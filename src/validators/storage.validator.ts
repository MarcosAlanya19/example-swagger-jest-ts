import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator';

export const validatorGetItem = [
  check('id').exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  },
];

export const validatorDeleteItem = [...validatorGetItem];
