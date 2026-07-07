const express = require("express");
const { fetchImages, fetchByQuery } = require("../controller/image.controller");

const router = express.Router();

router.get("/images",fetchImages);

router.get("/search",fetchByQuery);

module.exports = router;