
const mongoose=require("mongoose");
const mailerSchema=new mongoose.Schema({
    email:String,
    name:String,
    comment:String
})
module.exports=mongoose.model("mailer",mailerSchema)