
// //=============================================SESSION===========================================================================


const express=require("express");
const app=express();
const mongoose=require("mongoose")
const bodyparser = require('body-parser')
const session=require("express-session")
require("dotenv").config();
const sessionRoutes=require("./routes/sessionRoutes")
const cors=require("cors")

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors({origin:"http://localhost:5173",credentials:true}));


app.use("/",sessionRoutes);
app.use(session({
  secret:"Your_Secret_Key",
  resave:true,
  saveUninitialized:true
}))

mongoose.connect(process.env.DBCON).then(()=>{
  console.log("Database successfully Connected!!!");
})



const Port=process.env.PORT ||5000


app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})
