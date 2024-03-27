import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import "../../styls/comments.css";
import ax from "axios";

function Comments() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const { authState } = useContext(AuthContext);

  let { id } = useParams();

  useEffect(() => {
    ax.get(`http://localhost:3001/comments/${id}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addComment = () => {
    if (newComment != "") {
      ax.post(
        "http://localhost:3001/comments/",
        {
          commentBody: newComment,
          postId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
        .then(() => {
          setNewComment("");
          ax.get(`http://localhost:3001/comments/${id}`)
            .then((res) => {
              setComments(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const fixDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    // Extract year, month, and day components
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because getMonth() returns zero-based index
    const day = String(inputDate.getDate()).padStart(2, "0");

    // Format into desired format
    const outputDateString = `${year}/${month}/${day}`;
    return outputDateString;
  };
  const deleteComment = (id) => {
    console.log(id);
    ax.delete(`http://localhost:3001/comments/${id}`, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    })
      .then(
        setComments(
          comments.filter((val) => {
            return val.id != id;
          })
        )
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="comments-title">Comments</h1>
      <div className="add-new-comment">
        <textarea
          placeholder="add a comment....."
          className="add-comment-input"
          type="text"
          rows="3"
          cols="5"
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          required
        >
          {newComment}
        </textarea>
        <button onClick={addComment}>add comment</button>
      </div>

      <div className="list-of-comments">
        {comments.map((comment, key) => {
          const date = fixDate(comment.createdAt);

          return (
            <div key={key} className="comment">
              <div className="upper-con">
                <div>
                  <span className="comment-user">{comment.username} </span>
                  <span className="comment-date">{date}</span>
                </div>
                {(authState.username == comment.username ||
                  authState.role == "admin") && (
                  <button
                    className="comment-button"
                    onClick={() => {
                      deleteComment(comment.id);
                    }}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                )}
              </div>
              <div className="comment-body">{comment.commentBody}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
