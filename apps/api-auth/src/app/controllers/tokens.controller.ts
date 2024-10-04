import { FastifyRequest, FastifyReply } from 'fastify';

import { isValidEmail, comparePasswords } from '@barnie/helpers';
import { HTTP } from '@barnie/constants';

import User from '../models/user.model';
import { ICoreUser } from '@barnie/interfaces';

// TODO: Store this in the interafaces library
interface SignupBody {
  email: string;
  password: string;
}

export const signin = async function (
  req: FastifyRequest<{ Body: SignupBody }>,
  res: FastifyReply,
): Promise<Response | void> {
  try {
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

    // TODO use fastify plugin: const token = req.jwt.sign({ email, id: user._id });

    user.last_login = new Date();
    await user.save();

    res.status(HTTP.CODES.Accepted).send({ accessToken, refreshToken });
  } catch (error) {
    res.send(error);
  }
};

export const refreshToken = async function (
  req: FastifyRequest<{ Body: SignupBody }>,
  res: FastifyReply,
): Promise<Response | void> {
  try {
    const refreshToken = 'req.body';
    const decoded = await this.jwt.refresh.verify(refreshToken);
    const newAccessToken = this.jwt.sign({
      email: decoded.email,
      id: decoded.id,
    });

    res.status(HTTP.CODES.Accepted).send({ accessToken: newAccessToken });
  } catch (error) {
    res
      .status(HTTP.CODES.Unauthorized)
      .send({ message: 'Invalid refresh token. Please try again.' });
  }
};
