import cors from 'cors';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { dbConnect } from './config/db/mongo';
import { dbConnectMySql } from './config/db/mysql';
import { env } from './config/env';
import { openApiConfig } from './docs/swagger';
import router from './routes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('src/storage'));
app.use(express.urlencoded({ extended: true }));
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfig));

env.ENGINE_DB === 'mysql' ? dbConnectMySql() : dbConnect();

const port = env.PORT;
app.use('/api', router);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Local port: ${port}`);
  });
}
