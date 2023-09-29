import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { Track } from '../models';
import { handleHttpError } from '../utils/handleHttpError';

export const getItems = async (req: Request, res: Response) => {
  try {
    const data = await Track.find({deleted: false});

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

    const data = await Track.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);

    const data = await Track.create(body);
    res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEM');
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id, ...body } = matchedData(req);

    const data = await Track.findByIdAndUpdate(id, body, { new: true });
    res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_ITEM');
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);
    const { id } = body;

    const data = await Track.findByIdAndUpdate(id, { deleted: true }, { new: true });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEM');
  }
};
