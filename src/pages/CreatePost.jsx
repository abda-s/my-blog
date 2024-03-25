import React, { useState } from "react";
import ax from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [des, setDes] = useState("");
  const [content, setContent] = useState("");

  const submitForm = () => {
    ax.post(
      "http://localhost:3001/posts",
      {
        title: title,
        image: image,
        description: des,
        content: content,
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    );
  };
  return (
    <div>
      <div className="edit-form">
        <p id="heading">Create blog</p>
        <div className="title-and-image-cont">
          <div className="field">
            <label>title:</label>
            <input
              className="input-field"
              type="text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className="field">
            <label>image:</label>
            <input
              className="input-field"
              type="text"
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="field">
          <label>description:</label>
          <input
            className="input-field"
            type="text"
            onChange={(event) => {
              setDes(event.target.value);
            }}
          />
        </div>

        <div className="field">
          <label>content:</label>
          <textarea
            className="input-field"
            rows="10"
            cols="100"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></textarea>
        </div>
        <button className="button3" onClick={submitForm}>
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
