const express = require("express");
const { response } = require("express");
const router = express.Router();

router.get("/Cluck", (req,res) => {
    res.render("index")
  });
  router.get("/new",(req,res)=>{
    res.render("newcluck")
});
router.post("/", (req,res) => {
    res.send("my form sends a post request to the action/root and i have to handle creating and inserting data ad redirect")   
});


module.exports = router;
