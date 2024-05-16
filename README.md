# CanIWear
**[caniwear.com](https://caniwear.onrender.com/)**

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Technologies Utilized](#technologies-utilized)
* [Contribution](#contribution)
* [Acknowledgement](#acknowledgement)

## Description
Solo Project for Clothes score evaluation based on weather.

## Installation
1. Fork the repository and clone it locally. Install the necessary dependancies using ```npm i``` in the server directory and  ```npm i``` in the client directory. 
2. Create a postgresql database to store our user data. Create a local environment file ```.env``` in the server directory.  Write the relevant data: ``` DATABASE_URL, API_KEY```pertaining to our postgresql database in the ```env``` file you created.
Be sure to have [postgresql 14](https://www.postgresql.org/) or higher installed on your local machine. You can get the API Key from [WeatherAPI](https://www.weatherapi.com/).

3. Create a local environment file ```.env``` in the client directory as well and store the link to the server as: ```VITE_BASE_URL```. 

4. Relevant CLI:    
    - Express Server Side
        1. ```npm run migrate-latest``` to run migrations on the database
        2. ```npm run seed``` to run seed data to the database
        3. ```npm start``` to start the Express server
        4. To run a dev server using Nodemon, use ```npm run express-dev``` instead
        5. if you want to interact with database using prisma studio, please run ```npm run studio```
    - Vite Client Side
        1. ```npm run dev```

 ## Technologies-Utilized
 - React ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
 - Tailwind CSS ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
 - Typescript ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- Express ![ExpressJS](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
- Node ![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- Prisma ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- PostgresQL ![PostgresQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

- The backend follows the Model-View-Controller (MVC) architectural pattern, which separates the application logic into three interconnected components: the Model (data access layer), the View (user interface layer), and the Controller (application logic layer).
- The Model layer uses [Prisma](https://www.prisma.io/), an Open source Node.js and TypeScript ORM with a readable data model, automated migrations, type-safety, and auto-completion.
- The View layer handles the rendering of the user interface, including the search and result pages.
- The Controller layer manages the application logic, including clothes score evaluation.
- The front-end is built using [React.js](https://react.dev/), a popular JavaScript library for building user interfaces, [Typescript](https://www.typescriptlang.org/) for type safety, and [TailwindCSS](https://tailwindcss.com/) for fast-paced and easy-to-customize style.
- The application structure follows a standard React application structure, with separate components for different parts of the application.

## Contribution
 Submit a pull request and a member of our organization will look at what you wish to submit. If approved, we will merge it.

## Acknowledgement
Special thanks to everybody at Code Chrysalis and
- [WeatherAPI](https://www.weatherapi.com/) for the weather data.
