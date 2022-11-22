const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:String,
    email:String,
    phoneno:Number
})


module.exports=mongoose.model("user",schema)