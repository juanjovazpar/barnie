import { FastifyRequest, FastifyReply } from 'fastify';

import { comparePasswords } from '@barnie/helpers';
import { HTTP } from '@barnie/constants';

import { ICoreUser } from '@barnie/interfaces';
import { getUserByProperty } from '../utils/findUser.util';
import { TLoginInput } from '../schemas/user.schema';

export const signin = async function (
  req: FastifyRequest<{ Body: TLoginInput }>,
  res: FastifyReply,
): Promise<Response | void> {
  const { email, password } = req.body;
  const user: ICoreUser | null = await getUserByProperty('email', email);

  if (!user.isVerified || user.deleted) {
    res.status(HTTP.CODES.Unauthorized).send({
      message: 'Authentication failed. User not verified or inactive.',
    });
    return;
  }

  const passwordMatch: boolean = await comparePasswords(
    password,
    user.password,
  );

  if (!passwordMatch) {
    res
      .status(HTTP.CODES.Unauthorized)
      .send({ message: 'Authentication failed. Incorrect password.' });
    return;
  }

  // TODO: Apply MFA verification process.env.ENABLE_MFA
  // TODO: Signing users with something different than their DB id?
  const accessToken = this.jwt.sign({ sub: user._id, role: [] });
  const refreshToken = this.jwt.refresh.sign({ sub: user._id });

  user.last_login = new Date();
  await user.save();

  res.status(HTTP.CODES.Accepted).send({
    accessToken,
    refreshToken,
  });
};

export const refreshToken = async function (
  req: FastifyRequest,
  res: FastifyReply,
): Promise<Response | void> {
  const refreshToken = 'req.body'; // TODO: Obtain refresh token from cookie
  const decoded = await this.jwt.refresh.verify(refreshToken);
  const newAccessToken = this.jwt.sign({
    email: decoded.email,
    id: decoded.id,
  });

  res.status(HTTP.CODES.Accepted).send({ accessToken: newAccessToken });
};
