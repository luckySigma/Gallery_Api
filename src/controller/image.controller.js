const { getImages, getImagesByQuery } = require("../services/unsplash.service");

async function fetchImages(req, res, next) {
  try {
    const page = req.query.page || 1;
    const perPage = req.query.per_page || 12;

    const data = await getImages(page, perPage);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

async function fetchByQuery(req, res, next) {
  try {
    const page = req.query.page;
    const query = req.query.query;

    const data = await getImagesByQuery(page, query);

    res.status(200).json(data.results);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  fetchImages,
  fetchByQuery,
};
