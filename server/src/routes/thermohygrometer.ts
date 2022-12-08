import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function thermohygrometerRoutes(fastify: FastifyInstance) {

  fastify.get('/thermohygrometers/count', async () => {
    const count = await prisma.thermohygrometer.count();
    return { count }
  })

  fastify.post('/thermohygrometers', async (request, reply) => {
    const getThermohygrometer = z.object({
      name: z.string(),
      ipAddress: z.string(),
      macAddress: z.string(),
      model: z.string()
    })

    const thermohygrometer = getThermohygrometer.parse(request.body);

    const thermohygrometerCreate = await prisma.thermohygrometer.create({
      data: {
        name: thermohygrometer.name,
        ipAddress: thermohygrometer.ipAddress,
        macAddress: thermohygrometer.macAddress,
        model: thermohygrometer.model
      }
    })

    return reply.status(201).send({ thermohygrometerCreate });
  })

}