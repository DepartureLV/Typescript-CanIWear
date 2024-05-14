import { Request, Response } from "express";
import fakeWeatherData from "./utils/fakeWeatherData";
const weatherModel = require("./weather/weather.model");
const clothesModel = require("./clothes/clothes.model");

interface Result {
  maxtemp_c?: number;
  mintemp_c?: number;
  avgtemp_c?: number;
  maxwind_mph?: number;
  daily_chance_of_rain?: number;
  daily_chance_of_snow?: number;
  uv?: number;
  condition?: {
    text: string;
    icon: string;
    code: number;
  };
}

module.exports = {
  async getTodayResult(req: Request, res: Response) {
    const {
      clothes,
      catagories,
      location,
    }: { clothes: string; catagories: string; location: string } = req.body;

    const clothesData = await clothesModel.getClothesStat(clothes, catagories);
    console.log("clothes", clothesData);

    const weatherData = await weatherModel.getWeatherDataToday(location);
    const weatherDataFake = fakeWeatherData;
    const {
      maxtemp_c,
      mintemp_c,
      avgtemp_c,
      maxwind_mph,
      daily_chance_of_rain,
      daily_chance_of_snow,
      uv,
      condition,
    }: Result = weatherData.forecast.forecastday[0].day;

    console.log("maxtemp_c", maxtemp_c);
    console.log("mintemp_c", mintemp_c);
    console.log("avgtemp_c", avgtemp_c);
    console.log("maxwind_mph", maxwind_mph);
    console.log("daily_chance_of_rain", daily_chance_of_rain);
    console.log("daily_chance_of_snow", daily_chance_of_snow);
    console.log("uv", uv);
    console.log("condition", condition);

    res.status(200).send({ weatherData, clothesData });
  },
};
