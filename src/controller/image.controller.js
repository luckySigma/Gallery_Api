const { getImages } = require("../services/unsplash.service");

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

module.exports = {
  fetchImages,
};
