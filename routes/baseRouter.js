const express = require("express");
const { response } = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("requestparams>>>", req.query)
  res.cookie("username",req.query.Username).render("home");
});

//router.get("/")
module.exports = router;