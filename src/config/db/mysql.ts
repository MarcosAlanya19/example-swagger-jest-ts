import { Sequelize } from 'sequelize';
import { env } from '../env';

export const sequelize = new Sequelize(env.BD.MYSQL.DATABASE!, env.BD.MYSQL.USER!, env.BD.MYSQL.PASSWORD!, {
  dialect: 'mysql',
  host: env.BD.MYSQL.HOST,
});

export const dbConnectMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection established');
  } catch (error) {
    console.log('MySQL connection error');
  }
};
