import { FastifyRequest, FastifyReply } from 'fastify';

import { isValidEmail, comparePasswords } from '@barnie/helpers';
import { HTTP } from '@barnie/constants';

import User from '../models/user.model';
import { ICoreUser, ISignupBody } from '@barnie/interfaces';

export const signin = async function (
  req: FastifyRequest<{ Body: ISignupBody }>,
  res: FastifyReply,
): Promise<Response | void> {
  const { email, password } = req.body;

  // TODO: Abstract this to a service and use it in other controllers
  if (!isValidEmail(email)) {
    res.status(HTTP.CODES.BadRequest).send({
      message: 'This is not a valid email format.',
    });
    return;
  }

  const user: ICoreUser | null = await User.findOne({ email });

  if (!user) {
    res
      .status(HTTP.CODES.Unauthorized)
      .send({ message: 'Authentication failed. User not found.' });
    return;
  }

  if (!user.isVerified) {
    res
      .status(HTTP.CODES.Unauthorized)
      .send({ message: 'Authentication failed. User not verified.' });
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

  const accessToken = this.jwt.access.sign({ email, id: user._id });
  const refreshToken = this.jwt.refresh.sign({ email, id: user._id });

  user.last_login = new Date();
  await user.save();

  res.status(HTTP.CODES.Accepted).send({
    accessToken,
    refreshToken,
  });
};

export const refreshToken = async function (
  req: FastifyRequest<{ Body: ISignupBody }>,
  res: FastifyReply,
): Promise<Response | void> {
  const refreshToken = 'req.body';
  const decoded = await this.jwt.refresh.verify(refreshToken);
  const newAccessToken = this.jwt.sign({
    email: decoded.email,
    id: decoded.id,
  });

  res.status(HTTP.CODES.Accepted).send({ accessToken: newAccessToken });
};
