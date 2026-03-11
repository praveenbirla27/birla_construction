const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

router.get("/myprojects/:userId", async (req,res)=>{

const projects = await Request.find({user:req.params.userId});

res.json(projects);

});

module.exports = router;