const { Router } = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../../controller/users/user.js");
const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

module.exports = userRouter;
