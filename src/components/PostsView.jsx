import React from "react";
import OnePost from "./OnePost";
import "../styls/posts-view.css"
import posts from "../moks/posts"

export default function PostsView() {
    return (
        <div className="all-posots-container">
            <div className="header">
                Recent Posts
            </div>

            <div className="posots-container">
                {posts.map((post, index) => {
                    return <OnePost
                        key={index}
                        title={post.title}
                        description={post.description}
                        tags={post.tags}
                        date={post.date}
                        link={post.link} />
                })}
            </div>

        </div>
    )
}