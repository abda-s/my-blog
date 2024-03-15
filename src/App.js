import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Posts from "./components/Posts";
import Login from "./components/Login"
import Signup from "./components/Signup"

import "./styls/main.css"

const App = () => {
  return (
    <div className="all">
      <BrowserRouter>
      <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
