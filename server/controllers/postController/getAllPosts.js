const Post = require("../../models/post");

const allPosts = async (req, res) => {
  try {
    //
    //
    // This query will give me the array of every post in the database
    //
    //
    const list = await Post.find();

    res.json(list);
  } catch (err) {}
};

module.exports = { allPosts };
