import mongoose from 'mongoose';

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

export const Storage = mongoose.model('Storage', StorageSchema);
