const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({

projectId:{
 type:mongoose.Schema.Types.ObjectId,
 ref:"Request"
},

category:{
 type:String,
 enum:[
 "plan",
 "design",
 "photo",
 "bill",
 "contract"
 ]
},

fileUrl:String,

uploadedAt:{
 type:Date,
 default:Date.now
}

});

module.exports = mongoose.model("File",fileSchema);