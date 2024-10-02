import { FastifyRequest, FastifyReply } from 'fastify';

import { isValidEmail, getJWToken, comparePasswords } from '@barnie/helpers';
import { HTTP } from '@barnie/constants';

import User from '../models/user.model';
import { ICoreUser } from '@barnie/interfaces';

const getToken = getJWToken(process.env.JWT_SECRET);

// TODO: Store this in the interafaces library
interface SignupBody {
  email: string;
  password: string;
}

export const signin = async (
  req: FastifyRequest<{ Body: SignupBody }>,
  res: FastifyReply,
): Promise<Response | void> => {
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

    const token: string = getToken({ email, id: user._id });
    // TODO use fastify plugin: const token = req.jwt.sign({ email, id: user._id });

    user.last_login = new Date();
    await user.save();

    res.status(HTTP.CODES.Accepted).send({ token });
  } catch (error) {
    res.send(error);
  }
};
