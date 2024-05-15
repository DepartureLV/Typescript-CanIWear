import { WeatherRawData, clothesStat } from "../../globals";

module.exports = {
  calcAll(
    clothesData: clothesStat,
    weatherCalcData: WeatherRawData
  ): {
    heatResistantScoreMax: number | null;
    heatResistantScoreMin: number | null;
    heatIndexResistantScore: number | null;
    windResistantScore: number | null;
    rainResistantScore: number | null;
    snowResistantScore: number | null;
    uvResistantScore: number | null;
  } {
    const heatResistantScoreMax: number | null =
      clothesData.maxtemp_resistant && weatherCalcData.maxtemp_c
        ? clothesData.maxtemp_resistant -
          this.maxTempConversion(weatherCalcData.maxtemp_c)
        : null;

    const heatResistantScoreMin: number | null =
      clothesData.mintemp_resistant && weatherCalcData.mintemp_c
        ? clothesData.mintemp_resistant -
          this.minTempConversion(weatherCalcData.mintemp_c)
        : null;

    const heatIndexResistantScore: number | null = this.getHeatResistanceLevel(
      weatherCalcData.avgtemp_c,
      weatherCalcData.avghumidity
    );

    const windResistantScore: number | null =
      clothesData.wind_resistant && weatherCalcData.maxwind_mph
        ? clothesData.wind_resistant -
          this.windConversion(weatherCalcData.maxwind_mph)
        : null;

    const rainResistantScore: number | null =
      clothesData.rain_resistant && weatherCalcData.daily_chance_of_rain
        ? clothesData.rain_resistant -
          this.rainChanceConversion(weatherCalcData.daily_chance_of_rain)
        : 3;

    const snowResistantScore: number | null =
      clothesData.snow_resistant && weatherCalcData.daily_chance_of_snow
        ? clothesData.snow_resistant -
          this.snowChanceConversion(weatherCalcData.daily_chance_of_snow)
        : null;

    const uvResistantScore: number | null =
      clothesData.uv_resistant && weatherCalcData.uv
        ? clothesData.uv_resistant - this.uvConversion(weatherCalcData.uv)
        : null;

    return {
      heatResistantScoreMax,
      heatResistantScoreMin,
      heatIndexResistantScore,
      windResistantScore,
      rainResistantScore,
      snowResistantScore,
      uvResistantScore,
    };
  },

  maxTempConversion(temp: number): number | undefined {
    if (temp < 10) {
      return 1;
    } else if (temp < 20) {
      return 2;
    } else if (temp < 30) {
      return 3;
    } else if (temp < 40) {
      return 4;
    } else if (temp >= 40) {
      return 5;
    } else {
      console.error("maxTemp", temp);
      return undefined;
    }
  },

  minTempConversion(temp: number): number | undefined {
    if (temp < 0) {
      return 5;
    } else if (temp < 10) {
      return 4;
    } else if (temp < 20) {
      return 3;
    } else if (temp < 30) {
      return 2;
    } else if (temp >= 30) {
      return 1;
    } else {
      console.error("minTemp", temp);
      return undefined;
    }
  },

  getHeatResistanceLevel(
    temperatureC: number,
    humidity: number
  ): number | undefined {
    let heatIndex = heatIndexConversion(temperatureC, humidity);

    if (heatIndex < 27) {
      return 1;
    } else if (heatIndex < 32) {
      return 2;
    } else if (heatIndex < 38) {
      return 3;
    } else if (heatIndex < 43) {
      return 4;
    } else if (heatIndex >= 43) {
      return 5;
    } else {
      console.error("error");
      console.error("args", temperatureC, humidity);
      console.error("HI", heatIndex);
      return undefined;
    }
  },

  windConversion(wind: number): number | undefined {
    if (wind < 8) {
      return 1;
    } else if (wind < 16) {
      return 2;
    } else if (wind < 24) {
      return 3;
    } else if (wind < 32) {
      return 4;
    } else if (wind >= 32) {
      return 5;
    } else {
      console.error("wind", wind);
      return undefined;
    }
  },

  rainChanceConversion(rain: number): number | undefined {
    if (rain < 20) {
      return 1;
    } else if (rain < 40) {
      return 2;
    } else if (rain < 60) {
      return 3;
    } else if (rain < 80) {
      return 4;
    } else if (rain >= 80) {
      return 5;
    } else {
      console.error("rain", rain);
      return undefined;
    }
  },

  snowChanceConversion(snow: number): number | undefined {
    console.log("chance = ", snow);
    if (snow < 10) {
      return 1;
    } else if (snow < 20) {
      return 2;
    } else if (snow < 30) {
      return 3;
    } else if (snow < 40) {
      return 4;
    } else if (snow >= 40) {
      return 5;
    } else {
      console.error("snow", snow);
      return undefined;
    }
  },

  uvConversion(uv: number): number | undefined {
    if (uv < 3) {
      return 1;
    } else if (uv < 6) {
      return 2;
    } else if (uv < 8) {
      return 3;
    } else if (uv < 11) {
      return 4;
    } else if (uv >= 11) {
      return 5;
    } else {
      console.error("uv", uv);
      return undefined;
    }
  },
};

function heatIndexConversion(temperatureC: number, humidity: number): number {
  // Convert temperature to Fahrenheit
  let temperatureF = (temperatureC * 9) / 5 + 32;

  // Using the simplified heat index formula
  let HI =
    0.5 *
    (temperatureF + 61.0 + (temperatureF - 68.0) * 1.2 + humidity * 0.094);

  if (HI >= 80) {
    HI =
      -42.379 +
      2.04901523 * temperatureF +
      10.14333127 * humidity -
      0.22475541 * temperatureF * humidity -
      0.00683783 * temperatureF * temperatureF -
      0.05481717 * humidity * humidity +
      0.00122874 * temperatureF * temperatureF * humidity +
      0.00085282 * temperatureF * humidity * humidity -
      0.00000199 * temperatureF * temperatureF * humidity * humidity;

    if (humidity < 13 && temperatureF >= 80 && temperatureF <= 112) {
      HI -=
        ((13 - humidity) / 4) *
        Math.sqrt((17 - Math.abs(temperatureF - 95)) / 17);
    } else if (humidity > 85 && temperatureF >= 80 && temperatureF <= 87) {
      HI += ((humidity - 85) / 10) * ((87 - temperatureF) / 5);
    }
  }

  // Convert the heat index back to Celsius
  let HI_C = ((HI - 32) * 5) / 9;
  return HI_C;
}
