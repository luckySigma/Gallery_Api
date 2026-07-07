const axios = require("axios");
const unsplashBaseUrl = require("../constants/api.constants");

const unsplashClient = axios.create({
  baseURL: unsplashBaseUrl.UNSPLASH_BASE_URL,
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  },
});

module.exports = unsplashClient;
