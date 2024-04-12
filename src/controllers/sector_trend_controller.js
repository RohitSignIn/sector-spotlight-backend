const SectorTrendService = require("../services/sector_trend_service");
const SectorTrendRepository = require("../repositories/sector_trend_repository");

const sectorTrendService = new SectorTrendService(new SectorTrendRepository());

async function getAllEntries(req, res) {
  try {
    const response = await sectorTrendService.getAllEntries();
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

async function getSpecificEntries(req, res) {
  try {
    const response = await sectorTrendService.getSpecificEntries(req.params);
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

async function getInBetweenEntries(req, res) {
  try {
    const response = await sectorTrendService.getInBetweenEntries(req.params);
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

async function getDateInBetweenEntries(req, res) {
  try {
    const response = await sectorTrendService.getDateInBetweenEntries(
      req.params
    );
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

async function getEntryById(req, res) {
  try {
    const response = await sectorTrendService.getEntryById(req.params);
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
}

module.exports = {
  getAllEntries,
  getSpecificEntries,
  getInBetweenEntries,
  getDateInBetweenEntries,
  getEntryById,
};
