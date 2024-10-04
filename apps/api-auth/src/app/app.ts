import jwt from '@fastify/jwt';
import { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import * as path from 'path';
import mongoose from 'mongoose';

import { requestLogger } from '@barnie/middlewares';
import { authentication } from './middlewares/authentication.middleware';

/* eslint-disable-next-line */
export interface AppOptions {}

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  // TODO: Use fastify.env para setear las varaibles de entorno y hacerlas accesibles
  mongoose
    .connect(process.env.DB_AUTH_HOST || 'mongodb://localhost:27017/auth')
    .then(() => {
      fastify.log.info('Connected to MongoDB');
    })
    .catch((error) => {
      fastify.log.info('Error connecting to MongoDB:', error);
    });

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

  fastify.decorate('logger', requestLogger);
  fastify.decorate('authenticate', authentication);

  // This loads all plugins defined in routes folder
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts },
  });
}
