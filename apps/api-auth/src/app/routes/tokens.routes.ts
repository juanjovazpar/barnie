import { FastifyInstance } from 'fastify';

import { AUTH } from '@barnie/constants';
import { signin } from '../controllers/tokens.controller';

const ROUTES = AUTH.ROUTES;

export default async function (fastify: FastifyInstance) {
  fastify.post(ROUTES.TOKENS, signin);
}
