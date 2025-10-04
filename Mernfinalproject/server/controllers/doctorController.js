const doctorModel = require("../models/doctorModel");

const doctorSave=async(req, res)=>{
 try {
     const   {name, speciality, city, address, contact, email, password}= req.body;
    
     const Doctor = await doctorModel.create({
         doctorname: name,
        speciality: speciality,
         city: city,
         address: address,
         image:  req.file.path,
         contact:contact,
         email: email,
         password: password
     })    


 res.json({
 success: true,
 fileUrl: req.file.path, // Cloudinary file URL
 });
 } catch (err) {
 res.status(500).json({ success: false, message: err.message });
 }
}

const doctorLogin=async(req, res)=>{
    const { email, password} = req.body;
      
    try {
          const Doctor = await doctorModel.findOne({email:email});
          console.log(Doctor);
          if (!Doctor)
          {
            res.status(401).send({msg:"Email not found!"});
          }

          if (Doctor.password!=password)
          {
            res.status(401).send({msg:"Password does not match!"});
          }

          res.status(200).send(Doctor);

    } catch (error) {
         console.log(error);
    }
}


module.exports = { doctorSave, doctorLogin };
