const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  doctorname: { type: String, required: true },
  speciality: { type: String },
  city: { type: String },
  address: { type: String },
  image: { type: String },
  contact: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
