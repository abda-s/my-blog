import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import ax from "axios";

import "../styls/login.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const { setAuthState } = useContext(AuthContext);

  const signup = () => {
    const data = { username: username, password: password };

    ax.post("http://localhost:3001/auth", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
          setError(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.token);
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            state: true,
            role: response.data.role,
          });
          navigate(`/`);
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          // Server responded with an error message
          setError(error.response.data.error);
        } else {
          // Unexpected error occurred
          setError("An unexpected error occurred");
        }
      });
  };

  return (
    <div className="login-container">
      <div className="con">
        <div className="form">
          <p id="heading">Sign up</p>

          <div class="field">
            <input
              id="username"
              placeholder="username"
              className="input-field"
              type="username"
              name="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
            />
          </div>
          <div class="field">
            <input
              placeholder="Password"
              id="password"
              className="input-field"
              type="password"
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </div>
          <div className="error">{error}</div>
          <div className="buttons-con">
            <button onClick={signup} className="button3">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
