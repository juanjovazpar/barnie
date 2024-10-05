import { FastifyReply, FastifyRequest } from 'fastify';
import { isValidEmail } from '@barnie/helpers';
import { HTTP } from '@barnie/constants';
import { ISignupBody } from '@barnie/interfaces';

export const emailValidator = (
  req: FastifyRequest<{ Body: ISignupBody }>,
  res: FastifyReply,
) => {
  const { email } = req.body;

  if (!isValidEmail(email)) {
    res.status(HTTP.CODES.BadRequest).send({
      message: 'This is not a valid email format.',
    });
  }
};
