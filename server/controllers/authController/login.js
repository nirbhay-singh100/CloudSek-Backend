require("dotenv").config();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const { generateAuthToken } = require("../../config/generateAuthToken");
const { Error } = require("mongoose");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //
    //
    // if any field is empty, simply throw an error
    //
    //
    if (!username || !password) {
      console.log("pls fill all the fields");
      res.status(400).json({ message: "pls fill all the fields" });
      throw new Error("pls fill all the fields");
    }
    const userExist = await User.findOne({ username: username });

    //
    //
    // for login the user must have registered before
    //
    //
    if (!userExist) {
      console.log("user does not exist pls enter valid credentials");
      res
        .status(400)
        .json({ message: "user does not exist pls enter valid credentials" });
      throw new Error("user does not exist ");
    }

    //
    //
    // Using bcrypt.compare to compare the current password and hashed password stored inside collection
    //
    //
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExist.password
    );

    if (!isPasswordCorrect) {
      console.log("password incorrect");
      res.status(400).json({ message: "password incorrect" });
    }

    //
    //
    // generating a token which will be used to verify a user in endpoints.
    //
    //
    const token = await generateAuthToken(userExist.username);

    //
    //
    // Storing the generated token inside the cookie to build a session
    //
    //
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 50000000000000),
      httpOnly: true,
    });

    const data = {
      username: userExist.username,
    };

    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { login };
