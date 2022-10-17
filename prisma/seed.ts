// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });
/*   const price1 = await prisma.tariff.upsert({
    where: { type: 'Motorcycle'},
    update: {},
    create: {
      initial: 100,
      price: 10,
      commission: 5 * 0.20,
      type: 'Motorcycle',
    },
  });
  const price2 = await prisma.tariff.upsert({
    where: { type: 'Minivan'},
    update: {},
    create: {
      initial: 110,
      price: 12,
      commission: 5 * 0.20,
      type: 'Minivan',
    },
  });
  const price3 = await prisma.tariff.upsert({
    where: { type: 'Pickup'},
    update: {},
    create: {
      initial: 130,
      price: 15,
      commission: 5 * 0.20,
      type: 'Pickup',
    },
  }); */


  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });