const DoctorModel = require("../models/doctorModel");

const doctorSave = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "File not uploaded" });
    }

    const { name, speciality, city, address, contact, email, password } = req.body;

    const Doctor = await DoctorModel.create({
      doctorname: name,
      speciality: speciality,
      city: city,
      address: address,
      image: req.file.path,
      contact: contact,
      email: email,
      password: password
    });

    res.json({
      success: true,
      fileUrl: req.file.path,
    });

  } catch (err) {
    console.error("Error in doctorSave:", err); // ✅ Log the actual error
    res.status(500).json({ success: false, message: err.message });
  }
}


const doctorLogin=async(req, res)=>{
    const { email, password} = req.body;
      
    try {
          const Doctor = await DoctorModel.findOne({email:email});
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


  
module.exports = { 
  doctorSave, 
  doctorLogin 
};
