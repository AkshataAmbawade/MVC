const mongoose=require('mongoose');
const user=require('../Models/schema');
const user1=async(req,res)=>{
    try{
const data=req.body;
const result=await user.insertMany(data);
res.send(result)
    }catch(err)
    {
        console.log(err.message)
    }
}

module.exports={user1}