
const express=require("express");
const app=express();
const mailerRoute=require("./routes/mailerRoute")
const mongoose=require("mongoose")
const bodyparser = require('body-parser')

require("dotenv").config();
const cors=require("cors")
// const nodemailer=require("nodemailer")

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


mongoose.connect(process.env.DBCON).then(()=>{
  console.log("Database successfully Connected!!!");
})
app.use("/",mailerRoute)
const Port=process.env.PORT ||5000
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})