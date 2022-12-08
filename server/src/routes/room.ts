import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function roomRoutes(fastify: FastifyInstance) {

  fastify.get('/rooms/count', async () => {
    const count = await prisma.room.count();
    return { count }
  })

  fastify.post('/rooms', async (request, reply) => {
    const getRoom = z.object({
      name: z.string(),
      description: z.string(),
      variation: z.number(),
      imgUrl: z.string()
    })
    const room = getRoom.parse(request.body);
    const roomCreate = await prisma.room.create({
      data: {
        name: room.name,
        description: room.description,
        imgUrl: room.imgUrl,
        variation: room.variation
      }
    })

    return reply.status(201).send({ roomCreate });
  })

}