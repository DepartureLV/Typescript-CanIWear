import { Request, Response } from "express";
import fakeWeatherData from "../utils/fakeWeatherData";
const weatherModel = require("./weather.model");

module.exports = {
  async getWeatherData(req: Request, res: Response) {
    // const { clothes, location } = req.body;
    // const result = await weatherModel.getRecommendResult(clothes, location);
    const resultFake = fakeWeatherData;
    res.status(200).send(resultFake);
  },
};
