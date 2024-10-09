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
    "aadharUpload",
    "emailID",
    "address",
    "cityName",
    "pinCode",
    "registrationNo",
    "purchaseDate",
    "bikeNo",
    "bikeUpload",
    "remarks",
  ];
  const data = req.body;

  try {
    for (let item of requiredFields) {
      if (!data[item]) {
        return res.status.json({
          status: false,
          message: `Missing Field id ${item}`,
        });
      }
    }
    const {
      personName,
      personPhoto,
      mobileNo,
      gender,
      panNo,
      panUpload,
      aadharNo,
      aadharUpload,
      emailID,
      address,
      cityName,
      pinCode,
      registrationNo,
      purchaseDate,
      bikeNo,
      bikeUpload,
      remarks,
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
      aadharUpload: aadharUpload,
      emailID: emailID,
      address: address,
      cityName: cityName,
      pinCode: pinCode,
      registrationNo: registrationNo,
      purchaseDate: purchaseDate,
      bikeNo: bikeNo,
      bikeUpload: bikeUpload,
      remarks: remarks,
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
