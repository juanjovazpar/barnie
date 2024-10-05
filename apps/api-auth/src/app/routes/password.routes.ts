import { FastifyInstance } from 'fastify';
import { AUTH, HTTP } from '@barnie/constants';
import {
  resetPassword,
  forgotPassword,
} from '../controllers/password.controller';

const ROUTES = AUTH.ROUTES;
const PARAMS = AUTH.PARAMS;

export default async function (fastify: FastifyInstance) {
  fastify.route({
    method: HTTP.METHODS.POST,
    url: ROUTES.REQUEST_FORGOT_PASSWORD,
    schema: {
      body: {
        type: 'object',
        required: ['email'],
      },
    },
    handler: forgotPassword,
  });

  fastify.route({
    method: HTTP.METHODS.POST,
    url: ROUTES.SET_PASSWORD,
    schema: {
      params: {
        required: [PARAMS.FORGOT_PASSWORD_TOKEN],
        properties: {
          [PARAMS.FORGOT_PASSWORD_TOKEN]: { type: 'string' },
        },
      },
      body: {
        type: 'object',
        required: ['password'],
      },
    },
    handler: resetPassword,
  });
}
