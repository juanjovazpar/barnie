import { FastifyInstance } from 'fastify';
import { AUTH, HTTP } from '@barnie/constants';
import {
  register,
  getUser,
  updateUser,
  verifyUser,
} from '../controllers/users.controller';
import { userSchema, nameSchema } from '../schemas/user.schema';
import { getValidatorHandler } from '../utils/validatorHandler.util';

const ROUTES = AUTH.ROUTES;
const PARAMS = AUTH.PARAMS;

export default async function (fastify: FastifyInstance) {
  fastify.route({
    method: HTTP.METHODS.POST,
    url: ROUTES.USERS,
    schema: {
      body: {
        type: 'object',
        required: ['password', 'email', 'name'],
      },
    },
    preValidation: [getValidatorHandler(userSchema)],
    handler: register,
  });

  fastify.route({
    method: HTTP.METHODS.GET,
    url: ROUTES.VERIFY_USER,
    schema: {
      params: {
        required: [PARAMS.VERIFY_USER_TOKEN],
        properties: {
          [PARAMS.VERIFY_USER_TOKEN]: { type: 'string' },
        },
      },
    },
    handler: verifyUser,
  });

  fastify.route({
    method: HTTP.METHODS.GET,
    url: ROUTES.WHOAMI,
    onRequest: fastify['authenticate'],
    handler: getUser,
  });

  fastify.route({
    method: HTTP.METHODS.PATCH,
    url: ROUTES.USERS,
    schema: {
      body: {
        type: 'object',
        required: ['name'],
      },
    },
    preValidation: [getValidatorHandler(nameSchema)],
    onRequest: fastify['authenticate'],
    handler: updateUser,
  });
}
