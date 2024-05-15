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

    const weatherData = await weatherModel.getWeatherDataToday(location);
    // const weatherDataFake = fakeWeatherData;
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
    }: WeatherRawData = weatherData.forecast.forecastday[0].day;

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

    const evaluationScore = score.calcAll(clothesData, weatherCalcData);
    const {
      heatResistantScoreMax,
      heatResistantScoreMin,
      heatIndexResistantScore,
      windResistantScore,
      rainResistantScore,
      snowResistantScore,
      uvResistantScore,
    } = evaluationScore;

    // if no snow today -> exclude snowResistantScore
    if (snowResistantScore === null) {
      // find avg score -> return object with message, avg score, each evaluation, snow is null
      const params = [
        heatResistantScoreMax,
        heatResistantScoreMin,
        heatIndexResistantScore,
        windResistantScore,
        rainResistantScore,
        uvResistantScore,
      ];
      const sum: number = params.reduce(
        (a: number, b: number): number => a + b,
        0
      );
      const avg: number = sum / params.length;
      let message = "";

      try {
        if (avg < -1) {
          message = "Don't Dare!";
        } else if (avg < -0.5) {
          message = "Please avoid!";
        } else if (avg < 0) {
          message = "Not recommend";
        } else if (avg < 0.5) {
          message = "OK!";
        } else if (avg < 1) {
          message = "recommend";
        } else {
          message = "Excellent!";
        }
      } catch (error) {
        console.log("err", error);
      }

      res.status(200).send({
        message,
        avg,
        ...evaluationScore,
        snowResistantScore: null,
      });
    } else {
      // find avg score -> return object with message, avg score, each evaluation
      const sum: number = evaluationScore.reduce(
        (a: number, b: number): number => a + b,
        0
      );
      const avg: number = sum / evaluationScore.lenght;
      res.status(200).send({ message: "success", avg, ...evaluationScore });
    }
  },
};
