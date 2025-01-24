const mongoose = require("mongoose");

const connectionString = "mongodb+srv://tasnimchowdhury837:willow7@cluster0.gvjkd.mongodb.net/express?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
  try {
    //connect to the database
    mongoose.connect(connectionString);
    mongoose.connection.once("open", () => {
      console.log("connected to mongodb");
    });
  } catch (error) {
    console.log(`Something went wrong connecting to mongodb: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;