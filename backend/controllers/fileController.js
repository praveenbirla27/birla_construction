const File = require("../models/File");

exports.uploadFile = async (req,res)=>{

try{

const file = new File({

requestId:req.body.requestId,

title:req.body.title,

fileType:req.body.fileType,

fileUrl:req.file.path

});

await file.save();

res.json({message:"File uploaded"});

}catch(err){
res.status(500).json(err);
}

};


exports.getFiles = async (req,res)=>{

try{

const files = await File.find({requestId:req.params.id});

res.json(files);

}catch(err){
res.status(500).json(err);
}

};
