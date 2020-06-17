const mongoose = require("mongoose");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const url = process.env.MONGO_URI;

mongoose.connect(url, options);

mongoose.connection.on("connected", () => {
  console.log("Connection to database successfully established");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from database");
});

module.exports = mongoose.connection;
