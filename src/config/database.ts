import mongoose, { Error, ResolveSchemaOptions } from 'mongoose';
import { env } from './env';

export const dbConnect = async () => {
  try {
    await mongoose.connect(env.BD);
    console.log('Database connection established');
  } catch (error) {
    console.log(error);
    console.log('Database connection error');
  }
};
