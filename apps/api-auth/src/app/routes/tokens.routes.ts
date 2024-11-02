import { FastifyInstance } from 'fastify';
import { AUTH, HTTP } from '@barnie/constants';
import { refreshToken, signin } from '../controllers/tokens.controller';
import { loginSchema } from '../schemas/user.schema';
import { getValidatorHandler } from '../utils/validatorHandler.util';

const ROUTES = AUTH.ROUTES;

export default async function (fastify: FastifyInstance) {
  fastify.route({
    method: HTTP.METHODS.POST,
    url: ROUTES.TOKENS,
    schema: {
      body: {
        type: 'object',
        required: ['password', 'email'],
      },
    },
    preValidation: [getValidatorHandler(loginSchema)],
    handler: signin,
  });

  fastify.route({
    method: HTTP.METHODS.GET,
    url: ROUTES.REFRESH_TOKEN,
    handler: refreshToken,
  });
}
