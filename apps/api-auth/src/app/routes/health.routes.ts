import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async () => ({ message: 'Hey, there. I am alive!' }));
}
