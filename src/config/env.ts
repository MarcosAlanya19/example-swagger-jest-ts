import dotenv from 'dotenv';

dotenv.config();

export const env = {
  BD: {
    TEST: process.env.URL_DATABASE_TEST,
    MONGODB: process.env.URL_DATABASE || 'TEST',
    MYSQL: {
      DATABASE: process.env.MYSQL_DATABASE,
      USER: process.env.MYSQL_USER,
      PASSWORD: process.env.MYSQL_PASSWORD,
      HOST: process.env.MYSQL_HOST,
    },
  },
  PORT: process.env.PORT || 3000,
  PUBLIC: {
    URL: process.env.PUBLIC_URL,
    PATH: `${__dirname}/../storage`,
  },
  JWT_SECRET: process.env.JWT_SECRET,
  ENGINE_DB: process.env.ENGINE_DB,
  NODE_ENV: process.env.NODE_ENV || 'development',
};
