import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newProduct = await prisma.product.create({
    data: {
      name: 'Example Product',
      price: 9.99,
    },
  });

  console.log('Created new product: ', newProduct);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
