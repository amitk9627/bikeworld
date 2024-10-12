const express = require("express");
require("dotenv").config();
const userRoute = require("./routes/users/user.js");
const BikePurchaseRoute = require("./routes/BikePurchase/bikePurchase.js");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/bike", BikePurchaseRoute);

module.exports = app;
