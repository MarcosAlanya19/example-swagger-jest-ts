import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator';

export const validatorLogin = [
  check('name').exists().notEmpty().isLength({ min: 3, max: 50 }),
  check('age').exists().notEmpty().isNumeric(),
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  },
];

export const validatorRegister = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req: Request, res: Response, next: NextFunction) => {
    return validateResults(req, res, next);
  },
];
