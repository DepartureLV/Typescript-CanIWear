const dotenv = require("dotenv");
dotenv.config();

import fakeWeatherData from "../utils/fakeWeatherData";

const API_KEY = process.env.API_KEY;

module.exports = {
  async getWeatherDataToday(location: string) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&day=1`
      );
      const data = await response.json();

      return data;
    } catch (err) {
      return {
        error: {
          message: "cannot get weather data, please try again later.",
        },
      };
    }
  },
};
