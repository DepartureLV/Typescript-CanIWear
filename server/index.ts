import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 8080;

const weatherController = require("./src/weather/weather.controller");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const response = {
    message: "Please specify the correct endpoint",
  };
  res.status(401).send(response);
});

app.post("/result", weatherController.getWeatherData);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: "Bob",
//       email: "bob@prisma.io",
//     },
//   });

//   const profile = await prisma.profile.create({
//     data: {
//       userId: user.id,
//       bio: "I like turtles",
//     },
//   });

//   console.log(user);
//   console.log(profile);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
