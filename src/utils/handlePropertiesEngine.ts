import { env } from '../config/env';

export const getProperties = () => {
  const data = {
    nosql: {
      id: '_id',
    },
    mysql: {
      id: 'id',
    },
  };
  if (env.ENGINE_DB && (env.ENGINE_DB === 'nosql' || env.ENGINE_DB === 'mysql')) {
    return data[env.ENGINE_DB];
  } else {
    throw new Error('El valor de env.ENGINE_DB no es válido');
  }
};
