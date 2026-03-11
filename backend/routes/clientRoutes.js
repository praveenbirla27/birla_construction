const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

router.get("/myprojects/:userId", async (req,res)=>{

const projects = await Request.find();

res.json(projects);

});

module.exports = router;