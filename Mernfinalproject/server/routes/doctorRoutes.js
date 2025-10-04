
const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { doctorSave, doctorLogin } = require("../controllers/doctorController");

// route for registration (with file upload)
router.post("/doctorsave", upload.single("file"), doctorSave);

// login
router.post("/doctorlogin", doctorLogin);

module.exports = router;
