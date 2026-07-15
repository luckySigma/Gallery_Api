const axios = require("axios");
const unsplashClient = require("./unsplashClient");


async function getImages(page = 1, perPage) {
  const response = await unsplashClient.get("/photos", {
    params: {
      page,
      per_page: perPage,
      order_by: "popular",
    },
  });

  return response.data;
}

async function getImagesByQuery(page = 1, inputQuery = "") {
  const response = await unsplashClient.get("/search/photos", {
    params: {
      page,
      query: inputQuery,
    },
  });

  return response.data;
}

module.exports = { getImages, getImagesByQuery };
