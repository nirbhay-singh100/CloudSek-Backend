import React, { useState, useEffect } from "react";

import { Link, Navlink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const [postContent, setPostContent] = useState("");
  const [comment, setComment] = useState("");

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [hyperlink, setHyperlink] = useState(false);
  const getAllPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/application/allPosts", {
        method: "GET",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setAllPosts(data);
      //onsole.log(allPosts);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeComment = (event) => {
    const newValue = event.target.value;
    setComment(newValue);
  };

  const handleChangePost = (event) => {
    const newValue = event.target.value;
    setPostContent(newValue);
  };

  const handleClickComment = async (event) => {
    try {
      const postId = event.target.value;
      console.log(postId);
      const res = await fetch("http://localhost:5000/application/addcomment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          postId: postId,
          commentContent: comment,
          bold: bold,
          italic: italic,
          hyperlink: hyperlink,
        }),
      });

      navigate("/home");
    } catch (err) {}
  };

  const handleBoldStyle = (event) => {
    setBold(true);
    setItalic(false);
    setHyperlink(false);
  };
  const handleItalicStyle = (event) => {
    setBold(false);
    setItalic(true);
    setHyperlink(false);
  };
  const handleHyperlinkStyle = (event) => {
    setBold(false);
    setItalic(false);
    setHyperlink(true);
  };

  const handleClickPost = async (event) => {
    try {
      const res = await fetch("http://localhost:5000/application/createpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          postContent,
        }),
      });

      navigate("/home");
    } catch (err) {}
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div className="createPost">
        <form>
          <h3>What's on your mind ?</h3>
          <input type="text" onChange={handleChangePost} value={postContent} />
          <button onClick={handleClickPost}>Post</button>
        </form>

        <br />
        <br />
        <br />
      </div>
      <div className="allPosts">
        {allPosts.map((singlePost) => (
          <>
            <div>username: {singlePost.ownerUsername}</div>

            <div>post: {singlePost.postContent}</div>
            <form name="commentForm">
              <input
                type="text"
                name="comment"
                value={comment}
                onChange={handleChangeComment}
              />
              <input
                type="radio"
                id="boldStyle"
                value={bold}
                onClick={handleBoldStyle}
                name="styleButton"
              />
              <label htmlFor="boldStyle">Bold</label>
              <input
                type="radio"
                id="italic"
                value={italic}
                onClick={handleItalicStyle}
                name="styleButton"
              />
              <label htmlFor="boldStyle">Italic</label>
              <input
                type="radio"
                id="hyperlink"
                value={hyperlink}
                onClick={handleHyperlinkStyle}
                name="styleButton"
              />
              <label htmlFor="boldStyle">Hyperlink</label>
              <button onClick={handleClickComment} value={singlePost._id}>
                add
              </button>
            </form>
            <br />
            <div>
              {singlePost.allComments.map((comment) => (
                <>
                  <div>
                    {}
                    username: {comment.commentOwnerUsername}
                  </div>
                  <div>
                    {comment.bold ? (
                      <span>
                        comment :<strong>{comment.commentContent}</strong>
                      </span>
                    ) : null}
                  </div>
                  <div>
                    {comment.italic ? (
                      <span>
                        comment :<i>{comment.commentContent}</i>
                      </span>
                    ) : null}
                  </div>
                  <div>
                    {comment.hyperlink ? (
                      <span>
                        comment :
                        <a href={comment.commentContent}>
                          {comment.commentContent}
                        </a>
                      </span>
                    ) : null}
                  </div>
                  <div>
                    {!comment.hyperlink && !comment.bold && !comment.italic ? (
                      <span>comment :{comment.commentContent}</span>
                    ) : null}
                  </div>
                  {/* <div>comment: {comment.commentContent}</div> */}
                  <br />
                </>
              ))}
            </div>
            <br />
            <br />
            <br />
          </>
        ))}

        <div className="singlePost" key="" />
        <div className="singlePost">
          <div className="postContent"></div>
          <div className="comment"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
