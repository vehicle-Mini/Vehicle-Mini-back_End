const mongoose = require("mongoose")

const dbURL = "mongodb+srv://natmantest:Etyopgion9310@cluster0.a4xgx.mongodb.net/vehicle_DB?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dbURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// mongoose.connect("mongodb://127.0.0.1:27017/crud_db",{
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });

mongoose.connection.on("connected" , () => {
   console.log("connected to MongoDB");
});

mongoose.connection.on("error" , (err) => {
  console.error(`MongoDB connection error: ${err}`)
});


module.exports = mongoose;