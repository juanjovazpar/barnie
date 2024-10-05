import { FastifyRequest, FastifyReply } from 'fastify';

import {
  isValidPassword,
  PASSWORD_RULES,
  isValidEmail,
  hashPassword,
} from '@barnie/helpers';
import { AUTH, HTTP } from '@barnie/constants';
import { ICoreUser, ISignupBody } from '@barnie/interfaces';
import User from '../models/user.model';
import { SELECTED_USER_FIELDS } from '../constants/hidden-fields';

const getUserByProperty = async (
  res: FastifyReply,
  propertyName: string,
  propertyValue: string,
): Promise<ICoreUser> => {
  const user: ICoreUser | null = await User.findOne({
    [propertyName]: propertyValue,
  }).select(SELECTED_USER_FIELDS);

  if (!user) {
    res.status(HTTP.CODES.NotFound).send({ message: 'User not found' });
    return;
  }

  return user;
};

export const register = async (
  req: FastifyRequest<{ Body: ISignupBody }>,
  res: FastifyReply,
): Promise<Response | void> => {
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

  res.status(HTTP.CODES.Created).send({ message: 'User created successfully' });
};

export const getUser = async (req: FastifyRequest, res: FastifyReply) => {
  const { email } = req.user as { email: string };
  const user = await getUserByProperty(res, 'email', email);

  // TODO: Send user role and permissions
  res.status(HTTP.CODES.Accepted).send({ user });
};

export const updateUser = async (
  req: FastifyRequest<{ Body: ISignupBody }>,
  res: FastifyReply,
) => {
  const { name } = req.body;
  const { id } = req.user as { id: string };
  const user = await User.findByIdAndUpdate(
    id,
    {
      $set: { name },
    },
    { new: true },
  ).select(SELECTED_USER_FIELDS);

  if (!user) {
    res.status(HTTP.CODES.BadRequest).send({ message: 'Error updating user' });
    return;
  }

  res.status(HTTP.CODES.Accepted).send({ user });
};

export const verifyUser = async (req: FastifyRequest, res: FastifyReply) => {
  const { [AUTH.PARAMS.VERIFY_USER_TOKEN]: verificationToken } = req.params as {
    [AUTH.PARAMS.VERIFY_USER_TOKEN]: string;
  };
  const user = await User.findOneAndUpdate(
    { verificationToken },
    {
      $set: { isVerified: true },
      $unset: { verificationToken: null },
    },
    { new: true },
  );

  if (!user) {
    res
      .status(HTTP.CODES.BadRequest)
      .send({ message: 'Wrong verification token' });
    return;
  }

  // TODO: Implement send verification mail
  // await sendVerifiedUserMail(user.email);

  res
    .status(HTTP.CODES.Accepted)
    .send({ message: 'Account verified successfully' });
};
