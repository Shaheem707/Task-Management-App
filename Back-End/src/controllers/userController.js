const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "ABCFORALL";
module.exports = {
  signup: async (req, res) => {
    // Existing user Check
    // Hash password
    // User Creation
    // Generate token
    const body = req.body;
    try {
      const existingUser = await userModel.findOne({ email: body.email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists!" });
      }

      const hashedPassword = await bcrypt.hash(body.password, 10);

      const result = await userModel.create({
        email: body.email,
        password: hashedPassword,
        userName: body.userName,
        phoneNumber: body.phoneNumber,
        userRole: body.userRole,
      });

      const token = jwt.sign(
        {
          email: result.email,
          id: result._id,
        },
        SECRET_KEY
      );

      res.status(201).json({ user: result, token: token });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: error.message, fileName: "userController" });
    }
  },
  signin: async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    
    console.log(existingUser);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found!" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      SECRET_KEY
    );
    res.status(201).json({ user: existingUser, token: token });
  },
};
