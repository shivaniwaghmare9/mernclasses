
const express=require("express");
const route=express.Router();
const mailerController=require("../controllers/mailerController")

route.post("/emailsend",mailerController.emailSend)

module.exports=route;