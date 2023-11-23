import { PrismaClient } from '@prisma/client'
import { room } from './seedData'
const prisma = new PrismaClient()
async function main() {
  await prisma.rooms.createMany({data: room})
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })