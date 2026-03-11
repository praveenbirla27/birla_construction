const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const File = require("../models/File");
const auth = require("../middleware/authMiddleware");
const {adminOnly} = require("../middleware/roleMiddleware");

/* Upload project file */
router.post("/upload",auth,adminOnly,upload.single("file"), async (req, res) => {

try{

const { requestId, category } = req.body;

const newFile = new File({
requestId,
category,
fileUrl: req.file.filename
});

await newFile.save();

res.json({
message: "File uploaded",
file: newFile
});

}catch(err){
console.log(err);
res.status(500).json(err);
}

});


/* Get all files for a specific project */
router.get("/:requestId", async (req,res)=>{

try{

const files = await File.find({ requestId: req.params.requestId });

res.json(files);

}catch(err){
res.status(500).json(err);
}

});

module.exports = router;