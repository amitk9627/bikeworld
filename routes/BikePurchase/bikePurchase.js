const { Router } = require("express");

const {
  addBikePurchase,
  getBikePurchase,
} = require("../../controller/BikePurchase/bikePurchase.js");
const BikePurchaseRouter = Router();

BikePurchaseRouter.post("/addBikePurchase", addBikePurchase);
BikePurchaseRouter.get("/getBikePurchase", getBikePurchase);

module.exports = BikePurchaseRouter;
