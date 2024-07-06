require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/authenticationRoutes");
const postRoutes = require("./routes/postAndCommentRoutes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//
//
// This is to use to call login and register routes
//
//
app.use("/authentication", userRoutes);

//
//
// This is use to call createPost and addComment routes
//
//
app.use("/application", postRoutes);

app.listen(port, (req, res) => {
  console.log("server is running ", port);
});
