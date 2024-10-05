import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import {
  appendStatusToResponse,
  errorHandler,
  requestLogger,
} from '@barnie/middlewares';

export default fp(async function (fastify: FastifyInstance) {
  fastify.addHook('onResponse', requestLogger);
  fastify.addHook('onSend', appendStatusToResponse);
  fastify.addHook('onError', errorHandler);
});
