import { PrismaClient } from '@/generated/prisma'

// For JavaScript, don't use TypeScript type assertions
const globalForPrisma = global

// Check if prisma exists on the global object
export const prisma = 
  globalForPrisma.prisma || 
  new PrismaClient()

// Add prisma to the global object in development
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma