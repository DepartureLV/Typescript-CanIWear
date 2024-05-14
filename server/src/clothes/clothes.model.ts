import { Prisma, PrismaClient } from "@prisma/client";

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

  async getClothesStat(clothes: string, catagories: string) {
    // console.log(clothes, catagories);
    // console.log(typeof catagories);
    let stat;
    if (catagories === "tops") {
      stat = prisma.tops.findUnique({
        where: {
          itemName: clothes,
        },
      });
    } else if (catagories === "bottoms") {
      stat = prisma.bottoms.findUnique({
        where: {
          itemName: clothes,
        },
      });
    } else if (catagories === "dresses") {
      stat = prisma.dresses.findUnique({
        where: {
          itemName: clothes,
        },
      });
    } else if (catagories === "outerwear") {
      stat = prisma.outerwear.findUnique({
        where: {
          itemName: clothes,
        },
      });
    } else if (catagories === "activewear") {
      stat = prisma.activewear.findUnique({
        where: {
          itemName: clothes,
        },
      });
    } else if (catagories === "accessories") {
      stat = prisma.accessories.findUnique({
        where: {
          itemName: clothes,
        },
      });
    } else if (catagories === "footwear") {
      stat = prisma.footwear.findUnique({
        where: {
          itemName: clothes,
        },
      });
    } else if (catagories === "others") {
      stat = prisma.others.findUnique({
        where: {
          itemName: clothes,
        },
      });
    } else {
      return "error";
    }

    return stat;
  },
};
