const mongoose = require("mongoose");

const BikePurchaseSchema = new mongoose.Schema(
  {
    personName: {
      type: String,
      trim: true,
      default: null,
    },
    personPhoto: {
      type: String,
      default: null,
    },
    mobileNo: {
      type: String,
      default: null,
      trim: true,
    },
    gender: {
      type: String,
      default: null,
    },
    panNo: {
      type: String,
      default: null,
    },
    panUpload: {
      type: String,
      default: null,
    },
    aadharNo: {
      type: String,
      default: null,
    },
    aadharFront: {
      type: String,
      default: null,
    },
    aadharBack: {
      type: String,
      default: null,
    },
    engineNo: {
      type: String,
      default: null,
    },
    chasisNo: {
      type: String,
      default: null,
    },
    emailID: {
      type: String,
      trim: true,
      default: null,
    },
    address: {
      type: String,
      default: null,
      trim: true,
    },
    cityName: {
      type: String,
      trim: true,
      default: null,
    },
    pinCode: {
      type: String,
      trim: true,
      default: null,
    },
    registrationNo: {
      type: String,
      trim: true,
      default: null,
    },
    purchaseDate: {
      type: Date,
      default: null,
    },
    bikeNo: {
      type: String,
      default: null,
    },
    bikeUpload: {
      type: String,
      default: null,
    },
    remarks: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const BikePurchase = mongoose.model("BikePurchase", BikePurchaseSchema);

module.exports = BikePurchase;
