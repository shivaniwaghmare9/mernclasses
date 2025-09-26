
const express=require("express");
const route=express.Router();
const sessionController=require("../controllers/sessionController");


route.get("/save" ,sessionController.Save);
route.get("/display" ,sessionController.Display);
moodule.express=route
