import { Sequelize } from 'sequelize';
import { env } from '../env';

export const sequelize = new Sequelize(env.BD_MYSQL.MYSQL_DATABASE!, env.BD_MYSQL.MYSQL_USER!, env.BD_MYSQL.MYSQL_PASSWORD!, {
  dialect: 'mysql',
  host: env.BD_MYSQL.MYSQL_HOST,
});

export const dbConnectMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection established');
  } catch (error) {
    console.log('MySQL connection error');
  }
};
