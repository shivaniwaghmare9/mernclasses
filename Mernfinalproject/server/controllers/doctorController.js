const Doctor = require("../models/doctorModel");

const doctorSave = async (req, res) => {
  try {
    const { name, speciality, city, address, contact, email, password } = req.body;

    // optional: check if doctor with email exists
    const exist = await Doctor.findOne({ email });
    if (exist) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    const doctor = await Doctor.create({
      doctorname: name,
      speciality,
      city,
      address,
      image: req.file ? req.file.path : "",
      contact,
      email,
      password,
    });

    res.json({
      success: true,
      doctor,
      fileUrl: req.file ? req.file.path : null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(401).json({ success: false, msg: "Email not found!" });
    }
    // For production: never store password in plain text; use hashing 
    if (doctor.password !== password) {
      return res.status(401).json({ success: false, msg: "Password does not match!" });
    }
    res.status(200).json({ success: true, doctor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { doctorSave, doctorLogin };
