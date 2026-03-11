exports.getRequests = async (req,res)=>{
try{

const requests = await Request.find().sort({createdAt:-1});
res.json(requests);

}catch(err){
res.status(500).json(err);
}
}