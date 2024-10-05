import { FastifyRequest, FastifyReply } from 'fastify';

import { HTTP, AUTH } from '@barnie/constants';
import {
  comparePasswords,
  getHashedToken,
  hashPassword,
  isValidEmail,
  isValidPassword,
  PASSWORD_RULES,
} from '@barnie/helpers';
import { ICoreUser, ISignupBody } from '@barnie/interfaces';
import User from '../models/user.model';

export const forgotPassword = async (
  req: FastifyRequest<{ Body: ISignupBody }>,
  res: FastifyReply,
): Promise<Response | void> => {
  const { email } = req.body;

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

  const hashedResetPasswordToken = await getHashedToken(60 * 60 * 1000);

  user.resetPasswordToken = hashedResetPasswordToken;
  await user.save();

  // TODO: Implement send reset password mail
  // await sendResetPasswordMail(user.email, hashedResetPasswordToken);

  res
    .status(HTTP.CODES.Accepted)
    .send({ message: 'Reset password email sent successfully' });
};

export const resetPassword = async (
  req: FastifyRequest<{ Body: ISignupBody }>,
  res: FastifyReply,
): Promise<Response | void> => {
  const { [AUTH.PARAMS.FORGOT_PASSWORD_TOKEN]: resetPasswordToken } =
    req.params as {
      [AUTH.PARAMS.FORGOT_PASSWORD_TOKEN]: string;
    };
  const { password } = req.body;

  const user = await User.findOne({ resetPasswordToken });

  if (!user) {
    res
      .status(HTTP.CODES.Unauthorized)
      .send({ message: 'Invalid reset password token' });
    return;
  }

  if (!password || !isValidPassword(password)) {
    res
      .send(HTTP.CODES.BadRequest)
      .send({ message: `Invalid password format. ${PASSWORD_RULES}` });
    return;
  }

  const passwordMatch: boolean = await comparePasswords(
    password,
    user.password,
  );

  if (passwordMatch) {
    res
      .send(HTTP.CODES.Unauthorized)
      .send({ message: 'You must define a password never used before.' });
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
