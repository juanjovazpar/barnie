import { FastifyRequest, FastifyReply } from 'fastify';

import { HTTP, AUTH } from '@barnie/constants';
import {
  comparePasswords,
  getHashedToken,
  hashPassword,
} from '@barnie/helpers';
import { ICoreUser } from '@barnie/interfaces';
import User from '../models/user.model';
import { getUserByProperty } from '../utils/findUser.util';
import { TEmailInput, TPasswordInput } from '../schemas/user.schema';

export const forgotPassword = async (
  req: FastifyRequest<{ Body: TEmailInput }>,
  res: FastifyReply,
): Promise<Response | void> => {
  const { email } = req.body;
  const resetPasswordToken = await getHashedToken(60 * 60 * 1000);
  const user: ICoreUser | null = await User.findOneAndUpdate(
    { email },
    {
      $set: { resetPasswordToken },
    },
    { new: true },
  );

  if (!user) {
    res
      .status(HTTP.CODES.Unauthorized)
      .send({ message: 'Unauthorized. User not found.' });
    return;
  }

  // TODO: Implement send reset password mail
  // await sendResetPasswordMail(user.email, hashedResetPasswordToken);

  res
    .status(HTTP.CODES.Accepted)
    .send({ message: 'Reset password email sent successfully' });
};

export const resetPassword = async (
  req: FastifyRequest<{ Body: TPasswordInput }>,
  res: FastifyReply,
): Promise<Response | void> => {
  const { password } = req.body;
  const { [AUTH.PARAMS.FORGOT_PASSWORD_TOKEN]: resetPasswordToken } =
    req.params as {
      [AUTH.PARAMS.FORGOT_PASSWORD_TOKEN]: string;
    };
  const user: ICoreUser | null = await getUserByProperty(
    'resetPasswordToken',
    resetPasswordToken,
  );

  const passwordMatch: boolean = await comparePasswords(
    password,
    user.password,
  );

  if (passwordMatch) {
    res
      .send(HTTP.CODES.BadRequest)
      .send({ message: 'You must define a password not used before.' });
    return;
  }

  const hashedPassword = await hashPassword(password);

  user.resetPasswordToken = undefined;
  user.password = hashedPassword;
  await user.save();

  // TODO: Implement send password set mail
  // await sendPasswordSetMail(user.email);

  res
    .status(HTTP.CODES.Accepted)
    .send({ message: 'Password reset successfully' });
};
