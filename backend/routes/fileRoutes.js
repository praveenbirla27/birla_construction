const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const File = require("../models/File");

router.post("/upload",upload.single("file"),async(req,res)=>{

const {projectId,category} = req.body;

const newFile = new File({

projectId,
category,
fileUrl:req.file.filename

});

await newFile.save();

res.json({
message:"File uploaded",
file:newFile
});

});

module.exports = router;