const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const doctorRoutes = require("./routes/doctorRoutes");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
// to serve uploaded files (if needed)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

app.use("/api/doctor", doctorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
