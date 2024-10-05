import { FastifyInstance } from 'fastify';
import { AUTH, HTTP } from '@barnie/constants';
import {
  resetPassword,
  forgotPassword,
} from '../controllers/password.controller';

const ROUTES = AUTH.ROUTES;

export default async function (fastify: FastifyInstance) {
  fastify.route({
    method: HTTP.METHODS.POST,
    url: ROUTES.REQUEST_FORGOT_PASSWORD,
    handler: forgotPassword,
  });

  fastify.route({
    method: HTTP.METHODS.PATCH,
    url: ROUTES.SET_PASSWORD,
    handler: resetPassword,
  });
}
