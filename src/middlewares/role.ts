import { NextFunction, Response } from 'express';
import { Req as Request } from '../types';
import { handleHttpError } from '../utils/handleHttpError';

export const checkRole = (role: Array<string>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req;
    console.log(user);
    const rolesByUser = user?.role;

    const checkValueRole = role.some((rolSingle) => rolesByUser?.includes(rolSingle));
    if (!checkValueRole) {
      handleHttpError(res, 'USER_NOT_PERMISSIONS', 403);
      return;
    }

    next();
  } catch (error) {
    handleHttpError(res, 'ERROR_PERMISSIONS', 403);
  }
};
