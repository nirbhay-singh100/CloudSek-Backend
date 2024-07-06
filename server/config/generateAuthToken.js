const jwt = require("jsonwebtoken");

//
//
// This method will use jsonwebtoken library to create a token by using the username and secret_key
// provided inside the 'sign' method.
//
//
//
const generateAuthToken = async (user) => {
  const token = jwt.sign({ username: user }, process.env.SECRET_KEY);
  console.log(token);
  return token;
};

module.exports = { generateAuthToken };
