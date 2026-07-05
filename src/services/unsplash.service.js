const axios = require("axios");

const UNSPLASH_BASE_URL = "https://api.unsplash.com";

async function getImages(page = 1, perPage = 12) {
  const response = await axios.get(`${UNSPLASH_BASE_URL}/photos`, {
    params: {
      page,
      per_page: perPage,
      order_by: "popular",
    },
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });

  return response.data;
}

module.exports = { getImages };
