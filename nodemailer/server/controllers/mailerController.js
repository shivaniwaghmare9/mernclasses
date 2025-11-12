
// const nodemailer=require("nodemailer")
// const emailSend= async (req, res) => {
//   const {name ,email,comment} = req.body;
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user:"shivaniw69@gmail.com",
//       pass:"guok tahz pnft hsgd"
//     }
//   });
//   var mailOptions={
//     from:"shivaniw69@gmail.com",
//     to:email,
//     subject:"Sending Email using Node.js",
//     text:`name: ${name} comment: ${comment}`
//   };
//   transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//       console.log(error)
//     }
//     else{
//       console.log("email sent"+info.response)
//     }
//   })
// }

// module.exports={
//     emailSend
// }


const nodemailer = require("nodemailer");
const Mailer = require("../models/mailerModel");

const emailSend = async (req, res) => {
  const { name, email, comment } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "riyav2171@gmail.com",
      pass: "anqe kmng ffao vfic",
    },
  });

  var mailOptions = {
    from: "riyav2171@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: `name: ${name} comment: ${comment}`,
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);

      // Save failed email details
      await Mailer.create({
        name,
        email,
        comment,
        status: "failed",
        error: error.message,
      });

      return res.status(500).json({ message: "Email failed", error });
    } else {
      console.log("Email sent " + info.response);

      // Save successful email details
      await Mailer.create({
        name,
        email,
        comment,
        status: "sent",
      });

      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
};

module.exports = { emailSend };
// const nodemailer=require("nodemailer")
// const emailSend= async (req, res) => {
//   const {name ,email,comment} = req.body;
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user:"shivaniw69@gmail.com",
//       pass:"guok tahz pnft hsgd"
//     }
//   });
//   var mailOptions={
//     from:"shivaniw69@gmail.com",
//     to:email,
//     subject:"Sending Email using Node.js",
//     text:`name: ${name} comment: ${comment}`
//   };
//   transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//       console.log(error)
//     }
//     else{
//       console.log("email sent"+info.response)
//     }
//   })
// }

// module.exports={
//     emailSend
// }


const nodemailer = require("nodemailer");
const Mailer = require("../models/mailerModel");

const emailSend = async (req, res) => {
  const { name, email, comment } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "riyav2171@gmail.com",
      pass: "anqe kmng ffao vfic",
    },
  });

  var mailOptions = {
    from: "riyav2171@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: `name: ${name} comment: ${comment}`,
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);

      // Save failed email details
      await Mailer.create({
        name,
        email,
        comment,
        status: "failed",
        error: error.message,
      });

      return res.status(500).json({ message: "Email failed", error });
    } else {
      console.log("Email sent " + info.response);

      // Save successful email details
      await Mailer.create({
        name,
        email,
        comment,
        status: "sent",
      });

      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
};

module.exports = { emailSend };