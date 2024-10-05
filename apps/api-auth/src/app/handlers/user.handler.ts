import { FastifyReply, FastifyRequest } from 'fastify';
import { HTTP } from '@barnie/constants';
import { ICoreUser, ISignupBody } from '@barnie/interfaces';
import User from '../models/user.model';

export const findUserByEmail = async (
  req: FastifyRequest<{ Body: ISignupBody }>,
  res: FastifyReply,
) => {
  const { email } = req.body;

  const user: ICoreUser | null = await User.findOne({ email }).select([
    '-deleted',
    '-_id',
    '-password',
    '-verificationToken',
    '-isVerified',
  ]);

  // TODO: Send user role and permissions
  if (!user) {
    res.status(HTTP.CODES.NotFound).send({ message: 'User not found' });
  }

  // TODO: Prevent colliding with user object from JWT
  req.user = user;
};
