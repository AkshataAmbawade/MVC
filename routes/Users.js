
const express=require('express');
const { user1 } = require('../Controllers/user');
const router=express.Router();

router.route("/user").get(user1)


module.exports=router