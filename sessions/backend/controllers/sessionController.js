
app.use(session({
  secret:"Your_Secret_Key",
  resave:true,
  saveUninitialized:true
}))
app.get("/",(req,res)=>{
  req.session.myname="shivani";
  res.send("okk")
})
app.get("/display",(req,res)=>{
  var myname=req.session.myname;
  res.send(myname);
})