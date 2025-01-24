const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URI;

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