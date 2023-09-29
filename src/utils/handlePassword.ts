import bcrypt from 'bcrypt';

export const encrypt = async (passwordPlain: string) => {
  const hash = await bcrypt.hash(passwordPlain, 10);
  return hash;
};

export const compareEncrypt = async (passwordPlain: string, hashPassword: string) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};
