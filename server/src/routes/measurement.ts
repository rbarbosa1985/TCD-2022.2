import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function measurementRoutes(fastify: FastifyInstance) {


  fastify.get('/measurements/count', async () => {
    const count = await prisma.measurement.count();
    return { count }
  })

  fastify.get('/measurements', async () => {
    const measures = await prisma.measurement.findMany({
      distinct: ['roomId'],
      orderBy: {
        date: 'desc'
      },
      include: {
        room: {
          select: {
            name: true,
            description: true,
            imgUrl: true,
            variation: true
          }
        }
      }
    })

    return { measures }
  })

  fastify.get('/measurements/:id', async (request) => {
    const getPoolParams = z.object({
      id: z.string()
    })
    const { id } = getPoolParams.parse(request.params);

    const measure = await prisma.measurement.findUnique({
      where: {
        id
      },
      include: {
        room: true,
      }
    })

    return { measure }
  })

}