import { FastifyInstance } from 'fastify';

import { AUTH, HTTP } from '@barnie/constants';
import {
  register,
  getUser,
  updateUser,
  verifyUser,
} from '../controllers/users.controller';

const ROUTES = AUTH.ROUTES;
const PARAMS = AUTH.PARAMS;

export default async function (fastify: FastifyInstance) {
  fastify.route({
    method: HTTP.METHODS.POST,
    // TODO: Implement schema validations in all routes
    schema: {
      body: {
        type: 'object',
        required: ['password', 'email'],
      },
    },
    url: ROUTES.USERS,
    handler: register,
  });

  fastify.route({
    method: HTTP.METHODS.GET,
    schema: {
      params: {
        required: [PARAMS.VERIFY_USER_TOKEN],
        properties: {
          [PARAMS.VERIFY_USER_TOKEN]: { type: 'string' },
        },
      },
    },
    url: ROUTES.VERIFY_USER,
    handler: verifyUser,
  });

  fastify.get(ROUTES.USERS, { preHandler: fastify['authenticate'] }, getUser);

  fastify.patch(
    ROUTES.USERS,
    { preHandler: fastify['authenticate'] },
    updateUser,
  );
}
