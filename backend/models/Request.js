const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

plotSize:String,
floors:Number,
budget:String,
location:String,

description:String,

referenceImages:[String],

status:{
type:String,
default:"pending"
},

createdAt:{
type:Date,
default:Date.now
},
progress:{
foundation:{type:Boolean,default:false},
structure:{type:Boolean,default:false},
plastering:{type:Boolean,default:false},
finishing:{type:Boolean,default:false}
},

});

module.exports = mongoose.model("Request",requestSchema);