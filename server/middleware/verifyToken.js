require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//
//
// This method will be used to authenticate a user for an endpoint
//
//  How it works?
//
//  1. It uses the token that is stored inside the cookie
//  2. It will then use 'verify' method that would tell if the user is authorized or not
//
//
const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);

    req.username = verifyUser.username;

    next();
  } catch (err) {
    res.status(401).send("unauthorized user");
    console.log(err);
  }
};

module.exports = auth;
