import { FastifyRequest, FastifyReply } from 'fastify';
import { hashPassword } from '@barnie/helpers';
import { AUTH, HTTP } from '@barnie/constants';
import { ICoreUser } from '@barnie/interfaces';
import User from '../models/user.model';
import { getUserByProperty } from '../utils/findUser.util';
import { TNameInput, TUserInput } from '../schemas/user.schema';

export const register = async (
  req: FastifyRequest<{ Body: TUserInput }>,
  res: FastifyReply,
): Promise<Response | void> => {
  const { email, password, name } = req.body;

  const newUser: ICoreUser = new User({
    name: name,
    email: email,
    password: await hashPassword(password),
  });

  await newUser.save();

  res.status(HTTP.CODES.Created).send({ message: 'User created successfully' });
};

// TODO: Set interface for authenticated request
export const getUser = async (req: { user: unknown }, res: FastifyReply) => {
  const { sub } = req.user as { sub: string };
  const user: ICoreUser | null = await getUserByProperty('_id', sub);

  res.status(HTTP.CODES.Accepted).send({ user });
};

export const updateUser = async (
  req: { body: TNameInput; user: unknown },
  res: FastifyReply,
) => {
  const { name } = req.body;
  const { sub } = req.user as { sub: string };
  const user = await User.findByIdAndUpdate(
    sub,
    {
      $set: { name: name.trim() },
    },
    { new: true },
  );

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
  const user: ICoreUser | null = await User.findOneAndUpdate(
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
