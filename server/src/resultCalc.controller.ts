import { Request, Response } from "express";
import fakeWeatherData from "./utils/fakeWeatherData";
const weatherModel = require("./weather/weather.model");
const clothesModel = require("./clothes/clothes.model");
const score = require("./utils/score");

import { WeatherRawData, clothesStat } from "../globals";

module.exports = {
  async getTodayResult(req: Request, res: Response) {
    const {
      clothes,
      catagories,
      location,
    }: { clothes: string; catagories: string; location: string } = req.body;

    const clothesData: clothesStat = await clothesModel.getClothesStat(
      clothes,
      catagories
    );
    // console.log("clothes", clothesData);

    // const weatherData = await weatherModel.getWeatherDataToday(location);
    const weatherDataFake = fakeWeatherData;
    const {
      maxtemp_c,
      mintemp_c,
      avgtemp_c,
      maxwind_mph,
      avghumidity,
      daily_chance_of_rain,
      daily_chance_of_snow,
      condition,
      uv,
    }: WeatherRawData = weatherDataFake.forecast.forecastday[0].day;

    const weatherCalcData = {
      maxtemp_c,
      mintemp_c,
      avgtemp_c,
      maxwind_mph,
      avghumidity,
      daily_chance_of_rain,
      daily_chance_of_snow,
      condition,
      uv,
    };
    // console.log(weatherCalcData);

    const result = score.calcAll(clothesData, weatherCalcData);

    res.status(200).send(result);
  },
};
