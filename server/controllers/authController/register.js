const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const User = require("../../models/user");

const register = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;

    //
    //
    // if any field is empty, simply throw an error
    //
    //
    if (!username || !password || !confirmPassword) {
      console.log("pls fill all the fields");
      res.status(400).json({ message: "pls fill all the fields" });
      throw new Error("pls fill all the fields");
    }

    //
    //
    // If both the passwords don't match then throw an error again
    //
    //
    if (password !== confirmPassword) {
      console.log("passwords do not match");
      res.status(400).json({ message: "passwords do not match" });
      throw new Error("passwords do not match");
    }

    //
    //
    // Hash the password before storing it inside a database using bcryptjs
    //
    //
    const hashedPassword = await bcrypt.hash(password, 10);

    //
    //
    // Creating a new user
    //
    //
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ message: "user registered succesfully" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register };
