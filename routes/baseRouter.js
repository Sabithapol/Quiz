const express = require("express");
const { response } = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("requestparams>>>", req.query)
  res.render("home")
});

const MAX_COOKIE_AGE = 1000 * 60 * 60 * 24 * 7;
router.post("/signin", (req, res) => {
  const params = req.body; 
  console.log(params)
  res.cookie("username", params.username, { maxAge: MAX_COOKIE_AGE });
  res.redirect("/clucks/new");
});
router.get("/signin",(req,res)=>{
  res.render("signin")
})

// router.post("/sign_out", (req, res) => {
//   res.clearCookie("username");
//   res.redirect("/");
// });
module.exports = router;

