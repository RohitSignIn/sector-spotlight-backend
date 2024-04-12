const SectorTrend = require("../models/sector_trend_model");

class SectorTrendRepository {
  // Get All Entries
  async getAllEntries() {
    try {
      const res = await SectorTrend.find();
      console.log(res);
      return res;
    } catch (e) {
      throw e;
    }
  }

  // Get Specific Entries
  async getSpecificEntries(where, is) {
    try {
      const res = await SectorTrend.find({
        [where]: { $regex: new RegExp(is, "i") },
      });
      return res;
    } catch (e) {
      throw e;
    }
  }

  // Get In Between Entries
  async getInBetweenEntries(whereDoc, gth, lth) {
    try {
      const res = await SectorTrend.find({
        [whereDoc]: { $gte: gth, $lte: lth },
      });
      return res;
    } catch (e) {
      throw e;
    }
  }

  // Get Date In Between Entries
  async getDateInBetweenEntries(whereDoc, gth, lth) {
    try {
      const res = await SectorTrend.find({
        [whereDoc]: { $gte: gth, $lte: lth },
      });
      return res;
    } catch (e) {
      throw e;
    }
  }

  // Get Entry By Id
  async getEntryById(id) {
    try {
      const res = await SectorTrend.find({ _id: id });
      console.log(res);
      return res;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = SectorTrendRepository;
