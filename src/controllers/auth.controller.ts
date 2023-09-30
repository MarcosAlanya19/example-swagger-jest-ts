import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { User } from '../models';
import { handleHttpError } from '../utils/handleHttpError';
import { tokenSign } from '../utils/handleJwt';
import { compareEncrypt, encrypt } from '../utils/handlePassword';

export const register = async (req: Request, res: Response) => {
  try {
    const bodyMatched = matchedData(req);
    const passwordHash = await encrypt(bodyMatched.password);
    const body = { ...bodyMatched, password: passwordHash };

    const dataUser = await User.create(body);
    dataUser.set('password', undefined, { strict: false });

    const data = {
      user: dataUser,
      token: tokenSign(dataUser),
    };

    res.status(201).send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER_USER');
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);
    const user = await User.findOne({ email: body.email }).select('password name role email');
    if (!user) {
      handleHttpError(res, 'USER_NOT_EXIST', 404);
      return;
    }

    const hashPassword = user.password;

    const check = await compareEncrypt(body.password, hashPassword!);

    if (!check) {
      handleHttpError(res, 'PASSWORD_INVALID', 401);
      return;
    }

    user.set('password', undefined, { strict: false });
    const data = {
      token: tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_LOGIN_USER');
  }
};
