import { Request, Response } from "express";
import fakeWeatherData from "./utils/fakeWeatherData";
const weatherModel = require("./weather/weather.model");
const clothesModel = require("./clothes/clothes.model");
const calculate = require("./utils/score");

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
      daily_chance_of_rain,
      daily_chance_of_snow,
      uv,
      condition,
    }: WeatherRawData = weatherDataFake.forecast.forecastday[0].day;

    const weatherCalcData = {
      maxtemp_c,
      mintemp_c,
      avgtemp_c,
      maxwind_mph,
      daily_chance_of_rain,
      daily_chance_of_snow,
      uv,
      condition,
    };
    // console.log(weatherCalcData);

    calculate.calcAll(clothesData, weatherCalcData);

    res.status(200).send({ clothesData, weatherCalcData });
  },
};
