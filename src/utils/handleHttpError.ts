import { Response } from 'express';

export const handleHttpError = (res: Response, msg = 'Algo sucedio', code = 403) => {
  res.status(code).send({ msg });
};
