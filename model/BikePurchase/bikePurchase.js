const mongoose = require("mongoose");

const BikePurchaseSchema = new mongoose.Schema({
    personName: {
      type: String,
      required: true,
      trim: true,
    },
    personPhoto: {
      type: String,
    },
    mobileNo: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
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
    aadharUpload: {
      type: String,
    },
    emailID: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    cityName: {
      type: String,
      required: true,
      trim: true,
    },
    pinCode: {
      type: String,
      required: true,
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
