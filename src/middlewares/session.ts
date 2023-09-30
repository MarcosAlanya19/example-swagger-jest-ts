import { NextFunction, Response } from 'express';
import { User } from '../models';
import { Req as Request } from '../types';
import { handleHttpError } from '../utils/handleHttpError';
import { verifyToken } from '../utils/handleJwt';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, 'NO_TOKEN', 401);
      return;
    }

    const token = req.headers.authorization?.split(' ').pop();
    const { _id } = verifyToken(token!);

    if (!_id) {
      handleHttpError(res, 'ERROR_ID_TOKEN', 401);
      return;
    }



    const user = await User.findById({ _id }).select('-password -__v -token');
    if (!user) {
      handleHttpError(res, 'NOT_AUTHORIZATION');
      return;
    }
    req.user = user;

    next();
  } catch (error) {
    handleHttpError(res, 'NO_SESSION', 401);
  }
};
