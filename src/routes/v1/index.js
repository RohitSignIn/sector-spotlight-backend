const v1Router = require("express").Router();

const sectorTrendRouter = require("./sector_trend_router");

v1Router.use("/sector-trend", sectorTrendRouter);

module.exports = v1Router;
