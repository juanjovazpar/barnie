import { FastifyInstance } from 'fastify';

import { AUTH } from '@barnie/constants';
import { refreshToken, signin } from '../controllers/tokens.controller';

const ROUTES = AUTH.ROUTES;

export default async function (fastify: FastifyInstance) {
  fastify.post(ROUTES.TOKENS, signin);
  fastify.post(ROUTES.REFRESH_TOKEN, refreshToken);
}
