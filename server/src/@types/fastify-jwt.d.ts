import '@fastify/jwt';

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      sub: any;
      name: string;
      avatarUrl: string;
    }
  }

}