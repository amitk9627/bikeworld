const mongoose = require("mongoose");

const BikePurchaseSchema = new mongoose.Schema(
  {
    personName: {
      type: String,
      trim: true
    },
    personPhoto: {
      type: String,
    },
    mobileNo: {
      type: String,

      trim: true,
    },
    gender: {
      type: String,
    },
    panNo: {
      type: String,
    },
    panUpload: {
      type: String,
    },
    aadharNo: {
      type: String,
    },
    aadharFront: {
      type: String,
    },
    aadharBack: {
      type: String,
    },
    engineNo: {
      type: String,
    },
    chasisNo: {
      type: String,
    },
    emailID: {
      type: String,
      trim: true,
    },
    address: {
      type: String,

      trim: true,
    },
    cityName: {
      type: String,
      trim: true,
    },
    pinCode: {
      type: String,
      trim: true,
    },
    registrationNo: {
      type: String,
      trim: true,
    },
    purchaseDate: {
      type: Date,
    },
    bikeNo: {
      type: String,
    },
    bikeUpload: {
      type: String,
    },
    remarks: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const BikePurchase = mongoose.model("BikePurchase", BikePurchaseSchema);

module.exports = BikePurchase;
