const BikePurchase = require("../../model/BikePurchase/bikePurchase.js");
const addBikePurchase = async (req, res) => {
  const requiredFields = [
    "personName",
    "personPhoto",
    "mobileNo",
    "gender",
    "panNo",
    "panUpload",
    "aadharNo",
    "emailID",
    "address",
    "cityName",
    "pinCode",
    "registrationNo",
    "purchaseDate",
    "bikeNo",
    "bikeUpload",
    "remarks",
    "aadharFront",
    "aadharBack",
    "engineNo",
    "chasisNo",
  ];

  try {
    const {
      personName = null,
      personPhoto = null,
      mobileNo = null,
      gender = null,
      panNo = null,
      panUpload = null,
      aadharNo = null,
      emailID = null,
      address = null,
      cityName = null,
      pinCode = null,
      registrationNo = null,
      purchaseDate = null,
      bikeNo = null,
      bikeUpload = null,
      remarks = null,
      aadharFront = null,
      aadharBack = null,
      engineNo = null,
      chasisNo = null,
    } = req.body;

    // Create a new Person object with the request data
    const newBikePurchase = await BikePurchase.create({
      personName: personName,
      personPhoto: personPhoto,
      mobileNo: mobileNo,
      gender: gender,
      panNo: panNo,
      panUpload: panUpload,
      aadharNo: aadharNo,
      emailID: emailID,
      address: address,
      cityName: cityName,
      pinCode: pinCode,
      registrationNo: registrationNo,
      purchaseDate: purchaseDate,
      bikeNo: bikeNo,
      bikeUpload: bikeUpload,
      remarks: remarks,
      aadharFront: aadharFront,
      aadharBack: aadharBack,
      engineNo: engineNo,
      chasisNo: chasisNo,
    });
    if (!newBikePurchase) {
      return res.status(404).json({
        status: false,
        message: "Not Added",
      });
    }
    console.log("Data Added Successfully");
    res.status(201).json({
      status: true,
      message: "Data Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
      message: "Internal Server Error",
    }); // Handle validation or other errors
  }
};
const getBikePurchase = async (req, res) => {
  try {
    const getBikePurchase = await BikePurchase.find({}).sort({
      createdAt: -1,
    });
    if (!getBikePurchase) {
      return res.status(404).json({
        status: false,
        message: "Not Bike Found",
      });
    }
    return res.status(200).json({
      status: true,
      message: "Bike Found Successfully",
      result: getBikePurchase,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { addBikePurchase, getBikePurchase };
