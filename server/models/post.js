const mongoose = require("mongoose");
const conn = require("../config/dbConn");

//
//
// Creating Schema for Post Collection
//
//
const postSchema = new mongoose.Schema({
  ownerUsername: {
    type: String,
    required: true,
  },
  postContent: {
    type: String,
    required: true,
  },
  allComments: [
    {
      postId: {
        type: String,
        required: true,
      },
      commentContent: {
        type: String,
        required: true,
      },
      bold: Boolean,
      italic: Boolean,
      hyperlink: Boolean,
      commentOwnerUsername: {
        type: String,
        required: true,
      },
    },
  ],
});

//
//
// Using the above schema to create a collection in the database
//
//
const Post = new mongoose.model("posts", postSchema);
module.exports = Post;
