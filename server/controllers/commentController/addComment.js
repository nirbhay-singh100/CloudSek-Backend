const Post = require("../../models/post");

const addComment = async (req, res) => {
  try {
    const { postId, commentContent, bold, italic, hyperlink } = req.body;
    const commentOnwerUsername = req.username;

    //
    //
    // if there is no content in the content, then don't upload it, throw an error
    //
    //
    if (!commentContent) {
      console.log("can't add an empty comment");
      res.status(400).json({ message: "can't add an empty comment" });
      throw new Error("can't be empty");
    }

    const data = {
      postId: postId,
      commentContent: commentContent,
      bold: bold,
      italic: italic,
      hyperlink: hyperlink,
      commentOwnerUsername: commentOnwerUsername,
    };

    //
    //
    // updating the collection using the postId
    //
    //
    Post.findOneAndUpdate(
      { _id: postId },
      { $push: { allComments: data } }
    ).then((newComment) => {
      console.log("comment added");
      res.json({ message: "comment added" });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addComment };
