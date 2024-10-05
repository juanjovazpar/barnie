import { HTTP } from '@barnie/constants';
import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.route({
    method: HTTP.METHODS.GET,
    url: '/',
    handler: async () => ({
      message: 'Hey, there. I am alive!',
    }),
  });
}
