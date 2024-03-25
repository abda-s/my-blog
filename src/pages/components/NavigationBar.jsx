import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import ProfileComponent from "./ProfileComponent";
import "../../styls/Navbar.css";

const Navlinks = [
  {
    title: "Home.",
    link: "/",
  },
];
const NavigationBar = () => {
  const { authState } = useContext(AuthContext);
  const [menuActive, setMenueActive] = useState(false);

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
          <Link className="login" to={"/Login"}>
            Login.
          </Link>
        ) : (
          <>
            {/* <img className="profile-pic" src={profile} />
            <button onClick={logout}>log out</button>
            <Link to="/CreatePost">Create</Link> */}
            <ProfileComponent />
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
