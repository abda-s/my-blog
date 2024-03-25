import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Post from "./components/Post";
// import Signup from "./components/Signup";

import { AuthContext } from "./helpers/AuthContext";
import axios from "axios";

import "./styls/main.css";

const App = () => {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    state: false,
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ username: "", id: 0, state: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            state: true,
          });
        }
      });
  }, []);

  return (
    <div className="all">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <BrowserRouter>
          <NavigationBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Posts/:id" element={<Post />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
