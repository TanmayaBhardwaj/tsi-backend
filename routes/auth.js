const { Enquiry } = require("../Enquiry");
const { Home } = require("../Home");

const express = require("express");
// const {thanku}
const router = express.Router();
router.get("/", Home);
router.post("/enquiry", Enquiry);
// router.get("/thanku",thanku)

module.exports = router;
