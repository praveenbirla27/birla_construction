const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Request = require("../models/Request");

router.post(
"/submit",
upload.fields([
{ name:"referenceImages", maxCount:5 },
{ name:"plotMap", maxCount:1 },
{ name:"landDocument", maxCount:1 }
]),

async(req,res)=>{

try{

const request = new Request({

plotSize:req.body.plotSize,
floors:req.body.floors,
budget:req.body.budget,
location:req.body.location,
description:req.body.description,
mapEmbed:req.body.mapEmbed,

referenceImages:req.files.referenceImages?.map(f=>f.path),

plotMap:req.files.plotMap?.[0]?.path,

landDocument:req.files.landDocument?.[0]?.path

});

await request.save();

res.json({message:"Request submitted"});

}

catch(err){
res.status(500).json(err);
}

});

module.exports = router;