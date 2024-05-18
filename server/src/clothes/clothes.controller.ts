import { Request, Response } from "express";
const clothesModel = require("./clothes.model");

module.exports = {
  async getClothesOptions(req: Request, res: Response) {
    try {
      if (req) {
        const result = await clothesModel.getClothesOptions();
        res.status(200).send(result);
      }
    } catch (err) {
      console.error(err);
      return;
    }
  },
};
