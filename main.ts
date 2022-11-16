import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";

const user = await prisma.user.create({
    data: {
      email: 'alice@prisma.io',
      password: '0ee4808f893b8e05bdd251048d5c4c8af8bb89403676dda95619841a481f8e87',
      name: 'Alice',
      posts: {
        create: {
          title: 'Learn how to use Prisma with TypeScript',
          content: 'https://www.prisma.io/docs/',
        },
      },
    },
    include: {
      posts: true,
    },
  })