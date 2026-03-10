const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Request = require("../models/Request");


router.get("/",async(req,res)=>{
const requests = await Request.find().sort({createdAt:-1});
res.json(requests);
});

router.post("/", async (req,res)=>{

const request = new Request(req.body);

await request.save();

res.json({message:"Request created"});

});

router.post("/submit", upload.fields([
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

router.put("/progress/:id", async (req, res) => {

try{

const request = await Request.findById(req.params.id);

request.progress.foundation = req.body.foundation;
request.progress.structure = req.body.structure;
request.progress.plastering = req.body.plastering;
request.progress.finishing = req.body.finishing;

await request.save();

res.json({message:"Progress Updated"});

}
catch(err){
res.status(500).json(err);
}

});

router.post("/upload/:id", upload.single("file"), async (req,res)=>{

const request = await Request.findById(req.params.id);

request.documents.push({

name:req.body.name,
file:req.file.path,
category:req.body.category

});

await request.save();

res.json({message:"File uploaded"});

});
module.exports = router;