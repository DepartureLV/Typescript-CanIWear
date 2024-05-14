import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8080;

const weatherController = require("./src/weather/weather.controller");
const clothesController = require("./src/clothes/clothes.controller");
const resultsController = require("./src/resultCalc.controller");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const response = {
    message: "Please specify the correct endpoint",
  };
  res.status(401).send(response);
});

// CLOTHES OPTIONS
app.get("/clothes", clothesController.getClothesOptions);

// RAW WEATHER DATA
app.post("/weather", weatherController.getTodayWeather);

// RESULT
app.post("/result/today", resultsController.getTodayResult);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
