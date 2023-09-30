import mongoose from 'mongoose';
import { IStorage } from '../types';

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export type StorageEntity = mongoose.InferSchemaType<typeof StorageSchema>;
export const Storage: mongoose.Model<IStorage> = mongoose.model<IStorage>('Storage', StorageSchema);
