import { Request, Response } from "express";
const weatherModel = require("./weather.model");

module.exports = {
  async getWeatherData(req: Request, res: Response) {
    const { clothes, location } = req.body;
    const result = await weatherModel.getRecommendResult(clothes, location);
    res.status(200).send(result);
  },
};
