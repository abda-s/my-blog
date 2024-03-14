import React from "react";
import OnePost from "./OnePost";
import "../styls/posts-view.css"
import posts from "../moks/posts"
// const posts = [
//     {
//         title: "React Blog",
//         date: "13/3/24",
//         description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//         tags: ["react", "arduino"],
//         link: "/"
//     },
// ] 
export default function PostsView() {
    return (
        <div className="all-posots-container">
        <div className="header">
        PostsView 
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