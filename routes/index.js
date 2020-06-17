var express = require("express");
var router = express.Router();
const controller = require("../controllers/tracking.controller")

/* GET home page. */
router
  .get("/", controller.mainPage)
  .post("/", controller.addDataTracking);

module.exports = router;
