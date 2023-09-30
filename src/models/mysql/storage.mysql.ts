import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/mysql';

export const Storage = sequelize.define(
  'Storage',
  {
    url: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
