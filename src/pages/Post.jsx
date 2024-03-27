import React, { useState, useEffect } from "react";
import ax from "axios";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styls/markdown.css";
import Comments from "./components/Comments";
function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  useEffect(() => {
    ax.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
      setPostObject(res.data);
    });
  }, []);
  return (
    <div className="post-con">
      <div className="image-container">
        <img src={postObject.image} alt="Post" />
        <div className="image-overlay"></div>
        <div className="image-and-title-con">
          <span className="image-title">{postObject.title}</span>
          <p className="description">{postObject.description}</p>
        </div>
      </div>
      <div className="markdown-con-wrapper">
        <div></div> {/* First empty div */}
        <div className="markdown-con">
          <Markdown remarkPlugins={[remarkGfm]}>{postObject.content}</Markdown>
        </div>
        <div>
          <Comments />
        </div>{" "}
        {/* Second empty div */}
      </div>
    </div>
  );
}

export default Post;
