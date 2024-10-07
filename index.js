const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app.js");

// Database connection
const mongodbConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
mongodbConnect()
  .then(() => console.log("DataBase Connection Successfully............"))
  .catch((err) => console.log("DataBase Disconnected", err));

// Routes

// Start server

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
