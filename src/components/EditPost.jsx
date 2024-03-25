import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ax from "axios";
import { useNavigate } from "react-router-dom";
import "../styls/edit-post.css";
function EditPost() {
  let navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [image, setImage] = useState("");
  let [des, setDes] = useState("");
  let [content, setContent] = useState("");

  let { id } = useParams();
  useEffect(() => {
    ax.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
      setTitle(res.data.title);
      setImage(res.data.image);
      setDes(res.data.description);
      setContent(res.data.content);
      console.log(res.data);
    });
  }, []);

  const submitForm = () => {
    ax.put(`http://localhost:3001/posts/byId/edit/${id}`, {
      title: title,
      image: image,
      description: des,
      content: content,
    });
    navigate(`/Posts/${id}`);
  };
  const deletePost = () => {
    ax.delete(`http://localhost:3001/posts/byId/delete/${id}`).then(() => {
      navigate(`/`);
    });
  };
  return (
    <div>
      <div className="edit-form">
        <p id="heading">Edit blog</p>
        <div className="title-and-image-cont">
          <div className="field">
            <label>title:</label>
            <input
              className="input-field"
              value={title}
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
              value={image}
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
            value={des}
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
            value={content}
            rows="10"
            cols="100"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></textarea>
        </div>
        <button className="button3" onClick={submitForm}>
          Edit
        </button>
        <button className="button3" onClick={deletePost}>
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default EditPost;
