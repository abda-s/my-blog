import React from "react";
import OnePost from "./OnePost";
const post = {
    title: "React Blog",
    date: "13/3/24",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    tags: ["react", "arduino"]
}

const posts = [
    {
        title: "React Blog",
        date: "13/3/24",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        tags: ["react", "arduino"]
    },
    {
        title: "React Blog",
        date: "13/3/24",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        tags: ["react", "arduino"]
    },
    {
        title: "React Blog",
        date: "13/3/24",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        tags: ["react", "arduino"]
    }
]
export default function PostsView() {
    return (
        <div>
            PostsView
            {posts.map((post, index) => {
                return <OnePost key={index} title={post.title} description={post.description} tags={post.tags} date={post.date} />

            })}
        </div>
    )
}