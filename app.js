const express = require("express");
require("dotenv").config();
const userRoute = require("./routes/users/user.js");
const bodyParser = require('body-parser')
const BikePurchaseRoute = require("./routes/BikePurchase/bikePurchase.js");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({ limit: '50mb' }))



app.use("/api/v1/user", userRoute);
app.use("/api/v1/bike", BikePurchaseRoute);

module.exports = app;
