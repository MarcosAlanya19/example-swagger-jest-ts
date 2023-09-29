import { NextFunction, Request, Response } from 'express';

export const customHeader = (req: Request, res: Response, next: NextFunction) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === 'leifer-01') {
      next();
    } else {
      res.status(403).send({ error: 'ApiKey no correcta' });
    }
  } catch (error) {
    res.status(403).send({ error: 'Algo ocurrio en el custom header' });
  }
};
