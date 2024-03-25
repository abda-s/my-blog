import React, { useState, useEffect } from "react";
import ax from "axios";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  useEffect(() => {
    ax.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
      setPostObject(res.data);
    });
  }, []);
  return (
    <div>
      {}
      <Markdown remarkPlugins={[remarkGfm]}>{postObject.content}</Markdown>
    </div>
  );
}

export default Post;
