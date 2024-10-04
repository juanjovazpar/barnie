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
  fastify.get(ROUTES.VERIFY_USER, verifyUser);
  fastify.get(ROUTES.USERS, { preHandler: fastify['authenticate'] }, getUser);
  fastify.patch(
    ROUTES.USERS,
    { preHandler: fastify['authenticate'] },
    updateUser,
  );
}
