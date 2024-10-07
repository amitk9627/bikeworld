const Users = require("../../model/users/user.js");

const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { userName, password, role } = req.body;
    if (!userName || !password || !role) {
      return res.status(400).json({
        status: false,
        message: "Missing Field",
      });
    }
    const userExists = await Users.findOne({ userName });
    if (userExists) {
      return res
        .status(400)
        .json({ status: false, message: "User already exists" });
    }

    const user = await Users.create({
      userName,
      password,
      role,
    });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User Not Created",
      });
    }

    return res.status(201).json({
      status: true,
      userName: userName,
      message: "User Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: "Server error" });
  }
};
const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await Users.findOne({ userName });

    if (user.password != password) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid credentials" });
    }

    return res.status(200).json({
      status: true,
      message: "User Logged In Successfully",
      role: user.role,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
const logoutUser = async (req, res) => {};

module.exports = { registerUser, loginUser, logoutUser };
