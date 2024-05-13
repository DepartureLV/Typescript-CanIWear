import { Request, Response } from "express";
const weatherModel = require("./clothes.model");

module.exports = {
  async getClothesOptions(req: void, res: Response) {
    const result = await weatherModel.getClothesOptions()
    res.status(200).send(result);
  },
};
