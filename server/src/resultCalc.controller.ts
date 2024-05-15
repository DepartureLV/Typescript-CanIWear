import { Request, Response } from "express";
const weatherModel = require("./weather/weather.model");
const clothesModel = require("./clothes/clothes.model");
const score = require("./utils/score");

import { WeatherRawData, clothesStat, evaluationScore } from "../globals";

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

    const weatherData: any = await weatherModel.getWeatherDataToday(location);

    // ERROR HANDLER
    if (weatherData.error) {
      return res.status(400).send({
        error: { message: "Cound not find the location, please try again" },
      });
    }

    if (weatherData.location.country !== "Japan") {
      return res.status(400).send({
        error: {
          message:
            "Sorry, only city in Japan is supported or this city is not have the data right now",
        },
      });
    }

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

    const weatherCalcData: WeatherRawData = {
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

    const evaluationScore: evaluationScore = score.calcAll(
      clothesData,
      weatherCalcData
    );
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

      let message: string = "";
      let score: number = NaN;

      try {
        if (avg < -1) {
          message = "Don't Dare!";
          score = 0;
        } else if (avg < -0.5) {
          message = "Please avoid!";
          score = 1;
        } else if (avg < 0) {
          message = "Not recommend";
          score = 2;
        } else if (avg < 0.5) {
          message = "It's OK!";
          score = 3;
        } else if (avg < 1) {
          message = "Recommend";
          score = 4;
        } else {
          message = "Excellent!";
          score = 5;
        }
      } catch (error) {
        console.log("err", error);
      }

      res.status(200).send({
        message,
        score,
        evaluation: evaluationScore,
        snowResistantScore: null,
      });
    } else {
      const params = [
        heatResistantScoreMax,
        heatResistantScoreMin,
        heatIndexResistantScore,
        windResistantScore,
        rainResistantScore,
        uvResistantScore,
      ];
      // find avg score -> return object with message, avg score, each evaluation
      const sum: number = params.reduce(
        (a: number, b: number): number => a + b,
        0
      );
      const avg: number = sum / params.length;

      let message: string = "";
      let score: number = NaN;

      try {
        if (avg < -1) {
          message = "Don't Dare!";
          score = 0;
        } else if (avg < -0.5) {
          message = "Please avoid!";
          score = 1;
        } else if (avg < 0) {
          message = "Not recommend";
          score = 2;
        } else if (avg < 0.5) {
          message = "It's OK!";
          score = 3;
        } else if (avg < 1) {
          message = "Recommend";
          score = 4;
        } else {
          message = "Excellent!";
          score = 5;
        }
      } catch (error) {
        console.log("err", error);
      }

      res.status(200).send({
        message,
        score,
        evaluation: evaluationScore,
      });
    }
  },
};
