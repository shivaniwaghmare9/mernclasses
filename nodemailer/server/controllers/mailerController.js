
const nodemailer=require("nodemailer")
const emailSend= async (req, res) => {
  const {name ,email,comment} = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:"riyav2171@gmail.com",
      pass:"anqe kmng ffao vfic"
    }
  });
  var mailOptions={
    from:"riyav2171@gmail.com",
    to:email,
    subject:"Sending Email using Node.js",
    text:`name: ${name} comment: ${comment}`
  };
  transporter.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error)
    }
    else{
      console.log("email sent"+info.response)
    }
  })
}

module.exports={
    emailSend
}