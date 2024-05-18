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

    if (clothesData.error) {
      return res.status(400).send(clothesData);
    }

    const weatherData: any = await weatherModel.getWeatherDataToday(location);

    // ERROR HANDLER
    if (weatherData.error) {
      return res.status(400).send(weatherData);
    }

    if (weatherData.location.country !== "Japan") {
      return res.status(400).send({
        error: {
          message:
            "Sorry, only city in Japan is supported or this city data is not currently available",
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
    if (Number.isNaN(snowResistantScore)) {
      const params: number[] = [
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
          message = "Not recommended";
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
        clothes,
        evaluationScore,
        evaluation: {
          maxTempScore: convertDiffScoreToReadable(heatResistantScoreMax),
          minTempScore: convertDiffScoreToReadable(heatResistantScoreMin),
          heatIndexScore: convertDiffScoreToReadable(heatIndexResistantScore),
          windScore: convertDiffScoreToReadable(windResistantScore),
          rainScore: convertDiffScoreToReadable(rainResistantScore),
          snowScore: convertDiffScoreToReadable(snowResistantScore),
          uvScore: convertDiffScoreToReadable(uvResistantScore),
        },
        actualWeatherData: weatherData,
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
        clothes,
        evaluation: {
          maxTempScore: convertDiffScoreToReadable(heatResistantScoreMax),
          minTempScore: convertDiffScoreToReadable(heatResistantScoreMin),
          heatIndexScore: convertDiffScoreToReadable(heatIndexResistantScore),
          windScore: convertDiffScoreToReadable(windResistantScore),
          rainScore: convertDiffScoreToReadable(rainResistantScore),
          snowScore: convertDiffScoreToReadable(snowResistantScore),
          uvScore: convertDiffScoreToReadable(uvResistantScore),
        },
        actualWeatherData: weatherData,
      });
    }
  },
};

function convertDiffScoreToReadable(diffScore: number): {
  path: string;
  score: number;
} {
  if (diffScore < -1) {
    return {
      path: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      score: 1,
    };
  } else if (diffScore < -0.5) {
    return {
      path: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z",
      score: 2,
    };
  } else if (diffScore < 0.5) {
    return {
      path: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      score: 3,
    };
  } else if (diffScore < 1) {
    return {
      path: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z",
      score: 4,
    };
  } else if (diffScore >= 1) {
    return {
      path: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z",
      score: 5,
    };
  } else {
    return {
      path: "",
      score: NaN,
    };
  }
}
