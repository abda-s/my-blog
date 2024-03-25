import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import profile from "../../imgs/prfile.jpg"; // Assuming profile image is in the same directory
import "../../styls/profile.css";
import { AuthContext } from "../../helpers/AuthContext";

function ProfileComponent() {
  const { setAuthState } = useContext(AuthContext);

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, state: false });
  };
  return (
    <div className="profile-container">
      <img
        className="profile-pic"
        src={profile}
        alt="prof"
        onClick={toggleMenu}
      />
      {menuVisible && (
        <div className="dropdown-menu">
          <button onClick={logout}>Log out</button>
          <Link to="/CreatePost">Create</Link>
        </div>
      )}
    </div>
  );
}

export default ProfileComponent;
