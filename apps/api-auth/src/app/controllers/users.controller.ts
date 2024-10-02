import { FastifyRequest, FastifyReply } from 'fastify';

import {
  isValidPassword,
  PASSWORD_RULES,
  isValidEmail,
  hashPassword,
} from '@barnie/helpers';
import { AUTH, HTTP } from '@barnie/constants';
import { ICoreUser } from '@barnie/interfaces';
import User from '../models/user.model';

interface SignupBody {
  email: string;
  password: string;
}

export const register = async (
  req: FastifyRequest<{ Body: SignupBody }>,
  res: FastifyReply,
): Promise<Response | void> => {
  try {
    const { email, password } = req.body;

    if (!isValidPassword(password)) {
      res.status(HTTP.CODES.NotAcceptable).send({
        message: `This is not a valid password format. ${PASSWORD_RULES}`,
      });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(HTTP.CODES.NotAcceptable).send({
        message: 'This is not a valid email format.',
      });
      return;
    }

    // TODO: Check if user already exists

    const hashedPassword = await hashPassword(password);
    const newUser: ICoreUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res
      .status(HTTP.CODES.Created)
      .send({ message: 'User created successfully' });
  } catch (error: unknown) {
    res.send(error);
  }
};

export const updateUser = async (
  req: FastifyRequest<{ Body: SignupBody }>,
  res: FastifyReply,
) => {
  try {
    const { email } = req.body;

    const user: ICoreUser | null = await User.findOne({ email }).select([
      '-deleted',
      '-_id',
    ]);

    if (!user) {
      res.status(HTTP.CODES.NotFound).send({ message: 'User not found' });
      return;
    }

    // TODO: Implement update user

    res.status(HTTP.CODES.Accepted).send({ user });
  } catch (error: unknown) {
    res.send(error);
  }
};

export const getUser = async (
  req: FastifyRequest<{ Body: SignupBody }>,
  res: FastifyReply,
) => {
  try {
    const { email } = req.body;

    const user: ICoreUser | null = await User.findOne({ email }).select([
      '-deleted',
      '-_id',
    ]);

    if (!user) {
      res.status(HTTP.CODES.NotFound).send({ message: 'User not found' });
      return;
    }

    // TODO: Send user role and permissions
    res.status(HTTP.CODES.Accepted).send({ user });
  } catch (error: unknown) {
    res.send(error);
  }
};

export const verifyUser = async (
  req: FastifyRequest<{ Body: SignupBody }>,
  res: FastifyReply,
) => {
  const { verificationToken } = req.params as {
    [AUTH.PARAMS.VERIFY_USER_TOKEN]: string;
  };

  try {
    const user = await User.findOne({ verificationToken });

    if (!user) {
      res
        .status(HTTP.CODES.Unauthorized)
        .send({ message: 'Wrong verification token' });
      return;
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    // TODO: Implement send verification mail
    // await sendVerifiedUserMail(user.email);

    res
      .status(HTTP.CODES.Accepted)
      .send({ message: 'Account verified successfully' });
  } catch (error) {
    res.send(error);
  }
};
