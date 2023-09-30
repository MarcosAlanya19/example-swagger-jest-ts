import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db/mysql';

export const Track = sequelize.define(
  'Track',
  {
    name: {
      type: DataTypes.STRING,
    },
    album: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
    artist_name: {
      type: DataTypes.STRING,
    },
    artist_nickname: {
      type: DataTypes.STRING,
    },
    artist_nationality: {
      type: DataTypes.STRING,
    },
    duration_start: {
      type: DataTypes.NUMBER,
    },
    duration_end: {
      type: DataTypes.NUMBER,
    },
    mediaId: {
      type: DataTypes.STRING,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: true,
  }
);
