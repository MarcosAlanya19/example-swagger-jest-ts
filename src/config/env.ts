import dotenv from 'dotenv';

dotenv.config();

export const env = {
  BD: process.env.URL_DATABASE || "TEST",
  PORT: process.env.PORT || 3000,
  PUBLIC_URL: process.env.PUBLIC_URL,
  PUBLIC_PATH: `${__dirname}/../storage`,
  JWT_SECRET: process.env.JWT_SECRET
};
