import React from "react";
import "../styls/login.css";

export default function Signup() {
  return (
    <div className="login-container">
      <div className="con">
        <form className="form" action="/login" method="post">
          <p id="heading">Sign up</p>

          <div className="field">
            <input
              id="fistName"
              placeholder="Fist Name"
              className="input-field"
              type="text"
              name="fistName"
              required
            />
          </div>
          <div class="field">
            <input
              id="lastName"
              placeholder="Last Name"
              className="input-field"
              type="text"
              name="lastName"
              required
            />
          </div>
          <div class="field">
            <input
              id="email"
              placeholder="Email"
              className="input-field"
              type="email"
              name="email"
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
              required
            />
          </div>

          <div className="buttons-con">
            <input type="submit" value="Sign up" className="button3" />
          </div>
        </form>
      </div>
    </div>
  );
}
