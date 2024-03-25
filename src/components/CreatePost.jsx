import React, { useState } from "react";
import ax from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [des, setDes] = useState("");
  const [content, setContent] = useState("");

  const submitForm = () => {
    ax.post("http://localhost:3001/posts", {
      title: title,
      image: image,
      description: des,
      content: content,
    });
  };
  return (
    <div>
      <div className="create-post-con">
        <label>title:</label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <label>image:</label>
        <input
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />

        <label>description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDes(event.target.value);
          }}
        />

        <label>content:</label>
        {/* <input
          type="text"
          onChange={(event) => {
            setContent(event.target.value);
          }}
        /> */}
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          onChange={(event) => {
            setContent(event.target.value);
          }}
        >
          It was a dark and stormy night...
        </textarea>
        <button onClick={submitForm}>Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
