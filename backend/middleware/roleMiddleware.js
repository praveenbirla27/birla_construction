exports.adminOnly = (req,res,next)=>{

if(req.user.role !== "admin"){
return res.status(403).json({message:"Admin access only"});
}

next();

};

exports.clientOnly = (req,res,next)=>{

if(req.user.role !== "client"){
return res.status(403).json({message:"Client access only"});
}

next();

};