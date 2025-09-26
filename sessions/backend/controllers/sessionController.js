

const Save=async(req,res)=>{
  req.session.myname="shivani";
  res.send("okk")
}


const Display=async(req,res)=>{
  var myname=req.session.myname;
  res.send(myname);
}

module.exports={
   Save,
    Display
}
