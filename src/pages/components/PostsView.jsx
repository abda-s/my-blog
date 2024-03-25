import React, { useState, useEffect } from "react";
import OnePost from "./OnePost";
import "../../styls/posts-view.css";
import ax from "axios";

export default function PostsView() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    ax.get("http://localhost:3001/posts").then((res) => {
      console.log(res.data);
      setListOfPosts(res.data);
    });
  }, []);
  return (
    <div className="all-posots-container">
      <div className="header">Recent Posts</div>

      <div className="posots-container">
        {listOfPosts.map((post, index) => {
          return (
            <OnePost
              key={index}
              title={post?.title}
              description={post?.description}
              image={post?.image}
              date={post?.createdAt}
              link={post?.id}
            />
          );
        })}
      </div>
    </div>
  );
}
