import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: ['ROLE_ADMIN', 'ROLE_USER'],
      default: 'ROLE_USER',
    },
  },
  {
    timestamps: true,
  }
);

export type UserEntity = mongoose.InferSchemaType<typeof UserSchema>;
export const User: mongoose.Model<UserEntity> = mongoose.model<UserEntity>('User', UserSchema);
