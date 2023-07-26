const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const userObject = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const response = await User.create(userObject);
    return res.status(201).send({
      data: response,
      message: "Successfully registered a user",
    });
  } catch (error) {
    return res.status(500).send({
      message: "something went wrong",
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
      return res.status(401).send({
        message: "Invalid Password for the given email",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.AUTH_KEY,
      { expiresIn: "1d" }
    );
    return res.status(200).send({
      message: "Successfully logged In",
      data: {
        email: user.email,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: error,
    });
  }
};
exports.resetPassword = async (req, res) => {
  try {
    const user = await User.findById();
    const isValidPassword = bcrypt.compare(req.body.oldPassword, user.password);
    if (!isValidPassword) {
      return res.status(403).send({
        message: "Invalid Old password please write the correct old password",
      });
    }
    user.password = req.body.newPassword;
    await user.save();
    return res.status(200).send({
      data: user,
      message: "sucessfully updated the password",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal server error",
    });
  }
};
