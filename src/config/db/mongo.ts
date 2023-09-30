import mongoose from 'mongoose';
import { env } from '../env';

export const dbConnect = async () => {
  try {
    const DB_URI = env.NODE_ENV === 'test' ? env.BD.TEST : env.BD.MONGODB;
    await mongoose.connect(DB_URI!);
    console.log('Database connection established');
  } catch (error) {
    console.log(error);
    console.log('Database connection error');
  }
};
