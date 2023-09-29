import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import fs from 'fs';
import { env } from '../config/env';
import { Storage } from '../models';
import { handleHttpError } from '../utils/handleHttpError';

export const getItems = async (req: Request, res: Response) => {
  try {
    const data = await Storage.find({});

    res.json({ data });
  } catch (error: any) {
    console.log(error.message);
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};

export const getItem = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);
    const { id } = body;

    const data = await Storage.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const { file } = req;
    const fileData = {
      filename: file?.filename,
      url: `${env.PUBLIC_URL}/${file?.filename}`,
    };
    const data = await Storage.create(fileData);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_DETAIL_ITEMS');
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);
    const { id } = body;
    const dataFile = await Storage.findById(id);
    await Storage.findByIdAndDelete(id);
    const filePath = `${env.PUBLIC_PATH}/${dataFile?.filename}`;
    fs.unlinkSync(filePath);

    const data = {
      filePath,
      deleted: true,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM');
  }
};
