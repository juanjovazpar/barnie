import { HTTP } from '../constants';
import { FastifyRequest, FastifyReply } from 'fastify';
import { MongoServerError } from 'mongodb';
import mongoose from 'mongoose';
import { ZodError } from 'zod';

export const errorHandler = async (
  _: FastifyRequest,
  res: FastifyReply,
  error: Error,
) => {
  if (error instanceof ZodError) {
    res
      .status(HTTP.CODES.BadRequest)
      .send({ message: 'Validaton failed', error: error.errors });
  } else if (
    error instanceof mongoose.Error.ValidationError ||
    (error as MongoServerError).code === 11000
  ) {
    res.status(HTTP.CODES.BadRequest).send({ error: error.message });
  } // @ts-ignore
  else if (error.statusCode === HTTP.CODES.Unauthorized) {
    res.status(HTTP.CODES.Unauthorized).send({ error: error.message });
  } else {
    res
      .status(HTTP.CODES.InternalServerError)
      .send({ error: 'Internal Server Error' });
  }
  console.log(error);
};
