const mongoose = require("mongoose");

const sectorTrendSchema = new mongoose.Schema({
  end_year: { Number },
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: Date, default: Date.now },
  impact: { type: String },
  added: { type: Date, default: Date.now },
  published: { type: Date, default: Date.now },
  country: { type: String },
  relevance: { type: String },
  pestle: { type: String },
  source: { type: String },
  title: { type: String },
  likelihood: { type: String },
});

const SectorTrend = new mongoose.model("sectortrends", sectorTrendSchema);

module.exports = SectorTrend;
