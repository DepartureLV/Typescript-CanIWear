import { Request, Response } from "express";
const weatherModel = require("./weather.model");

module.exports = {
  async getTodayWeather(req: Request, res: Response) {
    const { location }: { location: string } = req.body;
    const weatherData = await weatherModel.getWeatherDataToday(location);

    res.status(200).send(weatherData);
  },
};
