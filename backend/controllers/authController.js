const User = require("../models/User");
const jwt = require("jsonwebtoken");

/* REGISTER USER */

exports.register = async (req,res)=>{

try{

const {name,email,phone,password,role} = req.body;

/* check if user exists */

const existingUser = await User.findOne({email});

if(existingUser){
return res.status(400).json({message:"User already exists"});
}

/* create new user */

const user = new User({
name,
email,
phone,
password,
role:"client"
});

await user.save();

res.json({
message:"Registration successful",
user
});

}catch(err){

res.status(500).json(err);

}

};


/* LOGIN USER */

exports.login = async (req,res)=>{

try{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.status(404).json({message:"User not found"});
}

/* check password */

if(user.password !== password){
return res.status(400).json({message:"Invalid password"});
}

/* create JWT token */

const token = jwt.sign(
{
id:user._id,
role:user.role
},
process.env.JWT_SECRET || "secret",
{
expiresIn:"7d"
}
);

res.json({
token,
user
});

}catch(err){

res.status(500).json(err);

}

};

