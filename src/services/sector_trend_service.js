const DuplicateEntry = require("../errors/duplicate_entry_error");
const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class SectorTrendService {
  constructor(repository) {
    this.sectorTrendService = repository;
  }

  async getAllEntries() {
    try {
      const res = await this.sectorTrendService.getAllEntries();
      if (!res) {
        throw new NotFoundError("SectorTrend", "text", "*");
      }
      return res;
    } catch (error) {
      if (error.name === "NotFoundError") {
        throw error;
      }
      console.log("SectorTrend Service: ", error);
      throw new InternalServerError();
    }
  }

  async getSpecificEntries(data) {
    try {
      const res = await this.sectorTrendService.getSpecificEntries(
        data.where,
        data.is
      );
      if (!res) {
        throw new NotFoundError("SectorTrend", "text", "*");
      }
      return res;
    } catch (error) {
      if (error.name === "NotFoundError") {
        throw error;
      }
      console.log("SectorTrend Service: ", error);
      throw new InternalServerError();
    }
  }

  async getInBetweenEntries(data) {
    try {
      const res = await this.sectorTrendService.getInBetweenEntries(
        data.where,
        data.gt,
        data.lt
      );
      if (!res) {
        throw new NotFoundError("SectorTrend", "text", "*");
      }
      return res;
    } catch (error) {
      if (error.name === "NotFoundError") {
        throw error;
      }
      console.log("SectorTrend Service: ", error);
      throw new InternalServerError();
    }
  }

  async getDateInBetweenEntries(data) {
    try {
      const res = await this.sectorTrendService.getDateInBetweenEntries(
        data.where,
        data.gt,
        data.lt
      );
      if (!res) {
        throw new NotFoundError("SectorTrend", "text", "*");
      }
      return res;
    } catch (error) {
      if (error.name === "NotFoundError") {
        throw error;
      }
      console.log("SectorTrend Service: ", error);
      throw new InternalServerError();
    }
  }

  async getEntryById(data) {
    try {
      const res = await this.sectorTrendService.getEntryById(data.id);
      if (!res) {
        throw new NotFoundError("SectorTrend", "text", "*");
      }
      return res;
    } catch (error) {
      if (error.name === "NotFoundError") {
        throw error;
      }
      console.log("SectorTrend Service: ", error);
      throw new InternalServerError();
    }
  }
}

module.exports = SectorTrendService;
