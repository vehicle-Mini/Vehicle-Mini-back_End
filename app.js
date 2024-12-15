const express = require("express")
const bodyParser = require("body-parser")
const vehicleRoutes = require("./src/routes/vehicleRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();
const session = require('express-session');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cookieParser());


const corsOptions = {
  origin: 'http://vehicle-mini-back-end.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));

app.get("/",   (req, res) => {
  res.json("Back End");
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use("/api/vehicle", vehicleRoutes);  //base route is /api/vehicle in vehicleRoutes it will have a child route to to have the controller function 


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});





