import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import { dbConnect } from './config/database';
import router from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('src/storage'));
app.use(express.urlencoded({ extended: true }));

dbConnect();

const port = env.PORT;
app.use('/api', router);

app.listen(port, () => {
  console.log(`Local port: ${port}`);
});
