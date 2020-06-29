const express = require("express");
const { response } = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

//router.get("/")
module.exports = router;