import dotenv from 'dotenv';

dotenv.config();

export const env = {
  BD_MONGODB: process.env.URL_DATABASE || 'TEST',
  BD_MYSQL: {
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_HOST: process.env.MYSQL_HOST,
  },
  PORT: process.env.PORT || 3000,
  PUBLIC_URL: process.env.PUBLIC_URL,
  PUBLIC_PATH: `${__dirname}/../storage`,
  JWT_SECRET: process.env.JWT_SECRET,
  ENGINE_DB: process.env.ENGINE_DB
};
