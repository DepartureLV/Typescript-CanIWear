import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Test",
      email: "test@prisma.io",
    },
  });

  const credential = await prisma.credential.create({
    data: {
      userId: user.id,
      username: "Test001",
      password: "123456",
    },
  });

  console.log(user);
  console.log(credential);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
