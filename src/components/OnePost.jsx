import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import TruncatedText from "./TruncatedText";
import "../styls/one-post.css";

//"https://wallpaperbat.com/img/641219-react-js-wallpaper-top-free-react-js-background.jpg"
export default function OnePost(props) {
  const [convertedDate, setConvertedDate] = useState("");
  useEffect(() => {
    const inputDateString = props.date;
    const inputDate = new Date(inputDateString);

    // Extract year, month, and day components
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because getMonth() returns zero-based index
    const day = String(inputDate.getDate()).padStart(2, "0");

    // Format into desired format
    const outputDateString = `${year}/${month}/${day}`;

    setConvertedDate(outputDateString);
  }, []);

  const { authState, setAuthState } = useContext(AuthContext);

  return (
    <div className="post-container">
      <img src={props.image} />
      <div className="content">
        <Link to={`/Posts/${props.link}`}>
          <h1>{props.title}</h1>
          <TruncatedText text={props.description} maxLength={50} />
        </Link>
        {/* <div className="tags">
          {props.tags.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div> */}
        <span className="date">{convertedDate}</span>
        {!authState.state ? (
          <></>
        ) : (
          <Link className="edit-link" to={`/EditPost/${props.link}`}>
            Edit
          </Link>
        )}
      </div>
    </div>
  );
}
