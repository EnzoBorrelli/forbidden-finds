import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma_client = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production")
  globalThis.prismaGlobal = prisma_client;

export const prisma = prisma_client;
