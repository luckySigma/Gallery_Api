const express = require("express");
const { fetchImages } = require("../controller/image.controller");

const router = express.Router();

router.get("/",fetchImages);

module.exports = router;