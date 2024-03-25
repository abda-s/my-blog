import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styls/Navbar.css";
import profile from "../imgs/prfile.jpg";

import { AuthContext } from "../helpers/AuthContext";

const Navlinks = [
  {
    title: "Home.",
    link: "/",
  },
  {
    title: "About Me.",
    link: "/AboutMe",
  },
  {
    title: "Posts.",
    link: "/Posts",
  },
];
const NavigationBar = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [menuActive, setMenueActive] = useState(false);
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, state: false });
  };
  return (
    <div className="navbar">
      {" "}
      {/* Use className instead of class */}
      <div className="menu-and-logo">
        <h1 className="logo">Abdullah Salameh.</h1>
        <i
          className="fa-solid fa-bars menu-icon"
          onClick={() => setMenueActive(!menuActive)}
        ></i>
      </div>
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {Navlinks.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        {!authState.state ? (
          <></>
        ) : (
          <>
            <img className="profile-pic" src={profile} />
            <button onClick={logout}>log out</button>
            <Link to="/CreatePost">Create</Link>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
