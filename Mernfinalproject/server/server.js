const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const doctorRoute = require("./routes/doctorRoute");
const app = express();
app.use(cors());

mongoose.connect(process.env.DBCON).then(()=>{
  console.log("Database Succesfully Connected!");
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/doctor", doctorRoute);
const Port=process.env.PORT || 8000

app.listen(Port, () => {
    console.log(`Server running on port 8000 Port ${Port}`);
}
)
