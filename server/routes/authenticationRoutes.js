const express = require("express");

const { register } = require("../controllers/authController/register");
const { login } = require("../controllers/authController/login");

const router = express.Router();

//
//
// This REST API is for creating/ registering new user into the application
//
//
router.post("/register", register);

//
//
// This REST API is for checking the existing of a user and generating a token to provide session using cookies
//
//
router.post("/login", login);

module.exports = router;
