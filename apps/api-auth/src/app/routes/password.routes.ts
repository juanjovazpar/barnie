import { FastifyInstance } from 'fastify';

import { AUTH } from '@barnie/constants';
import {
  resetPassword,
  forgotPassword,
} from '../controllers/password.controller';

const ROUTES = AUTH.ROUTES;

export default async function (fastify: FastifyInstance) {
  fastify.post(ROUTES.REQUEST_FORGOT_PASSWORD, forgotPassword);
  fastify.patch(ROUTES.SET_PASSWORD, resetPassword);
}
