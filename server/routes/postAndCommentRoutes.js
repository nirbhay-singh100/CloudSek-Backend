const express = require("express");
const { createPost } = require("../controllers/postController/createPost");
const { addComment } = require("../controllers/commentController/addComment");
const verifyToken = require("../middleware/verifyToken");
const { allPosts } = require("../controllers/postController/getAllPosts");

const router = express.Router();

//
//
//
//
//
//     NOTE: 'verifyToken' is a middleware that will authenticate user for every end point wherever it is needed
//
//
//
//
//
//

//
//
// This REST API is used to fetch all the post that are present in the database to display them
// on Home Page of the client
//
//
router.get("/allPosts", verifyToken, allPosts);

//
//
// This REST API is used to create a new post and upload it to the database
//
//
router.post("/createpost", verifyToken, createPost);

//
//
// This REST API is used to add comments in the already existing post present in the database.
//
//
router.post("/addcomment", verifyToken, addComment);

module.exports = router;
