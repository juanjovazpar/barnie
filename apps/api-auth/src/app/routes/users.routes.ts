import { FastifyInstance } from 'fastify';

import { AUTH } from '@barnie/constants';
import {
  register,
  getUser,
  updateUser,
  verifyUser,
} from '../controllers/users.controller';

const ROUTES = AUTH.ROUTES;

export default async function (fastify: FastifyInstance) {
  fastify.post(ROUTES.USERS, register);
  fastify.get(ROUTES.USER, getUser);
  fastify.patch(ROUTES.USER, updateUser);
  fastify.get(ROUTES.VERIFY_USER, verifyUser);
}
