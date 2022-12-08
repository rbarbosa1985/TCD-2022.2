import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import Fastify from 'fastify';

import { measurementRoutes } from './routes/measurement';
import { roomRoutes } from './routes/room';
import { thermohygrometerRoutes } from './routes/thermohygrometer';
import { userRoutes } from './routes/user';

async function bootstrap() {

  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(jwt, { secret: 'tempmaster' })

  await fastify.register(userRoutes);
  await fastify.register(measurementRoutes);
  await fastify.register(thermohygrometerRoutes);
  await fastify.register(roomRoutes);

  await fastify.listen({ port: 3333, host: '0.0.0.0' })

}

bootstrap();