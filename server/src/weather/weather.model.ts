const API_KEY = process.env.API_KEY;

module.exports = {
  async getRecommendResult(clothes: string, location: string) {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    );
    const data = await response.json();
    console.log("data", data, "clothes", clothes);
  },
};
