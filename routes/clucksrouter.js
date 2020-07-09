const express = require("express");
const { response } = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.render("index")
  });
router.get("/new",(req,res)=>{
    res.render("newcluck")
});

router.post("/", (req,res) => {
  const username = req.cookies.username
  const content = req.body.content
  const url = req.body.url
  res.send("")   
});



module.exports = router;
