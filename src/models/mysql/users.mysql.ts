import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/mysql';

export const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMBER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM('ROLE_USER', 'ROLE_ADMIN'),
    },
  },
  {
    timestamps: true,
  }
);
