import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123', // You should hash the password in a real app
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'password456', // You should hash the password in a real app
    },
  });

  // Seed Vehicles
  await prisma.vehicle.createMany({
    data: [
      {
        userId: user1.id,
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
      },
      {
        userId: user2.id,
        make: 'Honda',
        model: 'Civic',
        year: 2021,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
