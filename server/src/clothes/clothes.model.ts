import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

module.exports = {
  async getClothesOptions() {
    try {
      const accessories = await prisma.accessories.findMany();
      const activewear = await prisma.activewear.findMany();
      const bottoms = await prisma.bottoms.findMany();
      const dresses = await prisma.dresses.findMany();
      const footwear = await prisma.footwear.findMany();
      const others = await prisma.others.findMany();
      const outerwear = await prisma.outerwear.findMany();
      const tops = await prisma.tops.findMany();

      return {
        tops,
        bottoms,
        dresses,
        outerwear,
        activewear,
        accessories,
        footwear,
        others,
      };
    } catch (err) {
      console.log("error");
    }
  },
};
