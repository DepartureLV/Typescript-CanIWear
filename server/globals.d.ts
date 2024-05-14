export interface WeatherRawData {
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

export interface clothesStat {
  id: number;
  itemName: string;
  maxtemp_resistant?: number;
  mintemp_resistant?: number;
  wind_resistant?: number;
  rain_resistant?: number;
  snow_resistant?: number;
  heat_resistant?: number;
  uv_resistant?: number;
}
