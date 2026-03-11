const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({

requestId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Request"
},

category:String,

fileUrl:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("File", fileSchema);