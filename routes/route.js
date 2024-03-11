const express = require("express");

const {
  showData,
  postData,
  showParticularData,
  updateData,
  deleteData,
} = require("../controller/controller");

const router = express.Router();

router.get("/", showData);
router.post("/", postData);
router.get("/:id", showParticularData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

module.exports = router;
