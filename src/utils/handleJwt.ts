import jwt, { JwtPayload } from 'jsonwebtoken';
import { env } from '../config/env';


export const tokenSign = (user: any) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    env.JWT_SECRET!,
    { expiresIn: '30d' }
  );

  return sign;
};

export const verifyToken = (tokenJWT: string): JwtPayload => {
  try {
    const decodedToken = jwt.verify(tokenJWT, env.JWT_SECRET!) as JwtPayload;
    if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) throw new Error('Token has expired');
    return decodedToken;
  } catch (error) {
    throw new Error('Not authorized, token failed');
  }
};
