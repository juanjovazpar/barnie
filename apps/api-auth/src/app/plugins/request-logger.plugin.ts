import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { requestLogger } from '@barnie/middlewares';

export default fp(async function (fastify: FastifyInstance) {
  fastify.addHook('onRequest', requestLogger);
});
