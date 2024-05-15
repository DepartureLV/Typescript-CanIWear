const dotenv = require("dotenv");
dotenv.config();

import fakeWeatherData from "../utils/fakeWeatherData";

const API_KEY = process.env.API_KEY;

module.exports = {
  async getWeatherDataToday(location: string) {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&day=1`
    );
    const data = await response.json();

    // const data = await fakeWeatherData;

    return data;
  },
};
