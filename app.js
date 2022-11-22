
const express=require('express');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/User")
.then(()=>{
    console.log("Working")
})
.catch((err)=>{
    console.log(err.message)
})
 const user_Info=require("./routes/Users") 
app.use('/api/v1/user_Info',user_Info)

app.listen(2000,()=>{
    console.log("Listen to the port number 2000")
})
