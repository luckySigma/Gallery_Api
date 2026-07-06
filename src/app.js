require("dotenv").config();

const cors = require("cors");
const express = require("express");
const imageRoutes = require("./routes/image.routes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://image-gallery-xer4hohs5-anuradha7.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use("/api/images", imageRoutes);

module.exports = app;
