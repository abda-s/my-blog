import React from "react";
import { Link } from "react-router-dom";

import "../styls/one-post.css";
import TruncatedText from "./TruncatedText";

//"https://wallpaperbat.com/img/641219-react-js-wallpaper-top-free-react-js-background.jpg"
export default function OnePost(props) {
  return (
    <div className="post-container">
      <img src={props.image} />
      <div className="content">
        <Link to={`/Posts/${props.link}`}>
          <h1>{props.title}</h1>
          <TruncatedText text={props.description} maxLength={50} />
        </Link>
        <Link to={`/EditPost/${props.link}`}>Edit</Link>
        {/* <div className="tags">
          {props.tags.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div> */}
        <span className="date">{props.date}</span>
      </div>
    </div>
  );
}
