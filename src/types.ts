import { Request } from "express";
import { Types } from "mongoose";
import { UserEntity } from './models/users.model';

export interface User extends UserEntity {
  _id:            Types.ObjectId;
};

export interface Req extends Request {
  user?: User;
}
