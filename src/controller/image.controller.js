const { getImages, getImagesByQuery } = require("../services/unsplash.service");

async function fetchImages(req, res, next) {
  try {
    const page = req.query.page || 1;
    const perPage = req.query.perPage || 12;

    const data = await getImages(page, perPage);
    console.log(data);

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
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  fetchImages,
  fetchByQuery,
};
