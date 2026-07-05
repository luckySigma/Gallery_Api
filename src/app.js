require("dotenv").config()
const express = require("express");
const imageRoutes = require("./routes/image.routes");

const app = express();

app.use(express.json());

app.use("/api/images", imageRoutes);

module.exports = app;
