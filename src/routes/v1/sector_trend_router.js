const router = require("express").Router();

const {
  getAllEntries,
  getSpecificEntries,
  getInBetweenEntries,
  getDateInBetweenEntries,
  getEntryById,
} = require("../../controllers/sector_trend_controller");

// GET ALL Entries
router.get("/", getAllEntries);

// GET Specific Entries
router.get("/:where/:is", getSpecificEntries);

// GET In Between Entries
router.get("/:where/:gt/:lt", getInBetweenEntries);

// GET In between Entries via Date
router.get("/date/:where/:gt/:lt", getDateInBetweenEntries);

// GET Entry By ID
router.get("/:id", getEntryById);

module.exports = router;
