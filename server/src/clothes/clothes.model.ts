import { Prisma, PrismaClient } from "@prisma/client";
import { clothesStat } from "../../globals";

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
    console.log(clothes, catagories);
    let stat: clothesStat | null = null;

    try {
      console.log("here");
      if (catagories.toLowerCase() === "tops") {
        stat = await prisma.tops.findUnique({
          where: {
            itemName: clothes,
          },
        });
      } else if (catagories.toLowerCase() === "bottoms") {
        stat = await prisma.bottoms.findUnique({
          where: {
            itemName: clothes,
          },
        });
      } else if (catagories.toLowerCase() === "dresses") {
        stat = await prisma.dresses.findUnique({
          where: {
            itemName: clothes,
          },
        });
      } else if (catagories.toLowerCase() === "outerwear") {
        stat = await prisma.outerwear.findUnique({
          where: {
            itemName: clothes,
          },
        });
      } else if (catagories.toLowerCase() === "activewear") {
        stat = await prisma.activewear.findUnique({
          where: {
            itemName: clothes,
          },
        });
      } else if (catagories.toLowerCase() === "accessories") {
        stat = await prisma.accessories.findUnique({
          where: {
            itemName: clothes,
          },
        });
      } else if (catagories.toLowerCase() === "footwear") {
        stat = await prisma.footwear.findUnique({
          where: {
            itemName: clothes,
          },
        });
      } else if (catagories.toLowerCase() === "others") {
        stat = await prisma.others.findUnique({
          where: {
            itemName: clothes,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }

    return stat;
  },
};
