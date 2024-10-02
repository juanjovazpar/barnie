import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

export const getHashedToken = async (
  expiration: number = 24 * 60 * 60 * 1000,
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const expirationTime = Date.now() + expiration;
  const verificationToken = `${crypto
    .randomBytes(32)
    .toString('hex')}.${expirationTime}`;

  return await bcrypt.hash(verificationToken, salt);
};

export const getJWToken =
  (secret: string) =>
  (payload: object): string => {
    const jwtSecret = secret || 'default-secret';
    const token: string = jwt.sign(payload, jwtSecret, {
      expiresIn: '1h',
    });

    return token;
  };
