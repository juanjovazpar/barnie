import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import jwt from '@fastify/jwt';

// TODO: Implement cookie session: https://github.com/fastify/fastify-jwt?tab=readme-ov-file#default-options
export default fp(async function (fastify: FastifyInstance) {
  fastify.register(jwt, {
    secret: process.env.JWT_ACCESS_SECRET,
    namespace: 'access',
    sign: { expiresIn: '1h' },
  });

  fastify.register(jwt, {
    secret: process.env.JWT_REFRESH_SECRET,
    namespace: 'refresh',
    sign: { expiresIn: '7d' },
  });
});
