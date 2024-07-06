const Post = require("../../models/post");

const createPost = async (req, res) => {
  try {
    const postContent = req.body.postContent;
    console.log(req.username);
    const username = req.username;

    //
    //
    // if the postContent is empty, throw an exception
    //
    //
    if (!postContent) {
      console.log("cannot post empty ");
      res.status(400).json({ message: "cannot post empty " });
      throw new Error("cannot post empty ");
    }

    //
    //
    // creating a new entry in the collection
    //
    //
    const newPost = new Post({
      ownerUsername: username,
      postContent: postContent,
    });

    await newPost.save();
    res.json({ message: "post created" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPost };
