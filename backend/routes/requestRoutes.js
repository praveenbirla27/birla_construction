const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Request = require("../models/Request");
const auth = require("../middleware/authMiddleware");
const {clientOnly} = require("../middleware/roleMiddleware");


router.get("/",async(req,res)=>{
const requests = await Request.find().sort({createdAt:-1});
res.json(requests);
});

router.post("/", async (req,res)=>{

const request = new Request({
...req.body,
user:req.body.user
});

await request.save();

res.json({message:"Request created"});

});

router.post("/submit",auth,clientOnly,upload.fields([
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

referenceImages:req.files.referenceImages?.map(f=>f.filename),

plotMap:req.files.plotMap?.[0]?.f.filename,

landDocument:req.files.landDocument?.[0]?.f.filename

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

module.exports = router;