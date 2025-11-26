const express = require("express");
const route = express.Router();
const doctorController= require("../controllers/doctorController");
const uploadMiddleware = require("../middleware/uploadMiddleware");


route.post("/doctorsave", uploadMiddleware.upload.single("file"), doctorController.doctorSave);


route.post("/doctorlogin", doctorController.doctorLogin);

module.exports= route;
