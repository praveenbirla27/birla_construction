const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

plotSize:String,
floors:Number,
budget:Number,
location:String,

description:String,

referenceImages:[String],

plotMap:String,

landDocument:String,

status:{
type:String,
default:"pending"
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Request",requestSchema);