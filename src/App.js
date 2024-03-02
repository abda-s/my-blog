import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Coding from "./components/Coding";
import Youtube from "./components/Youtube";
import Art from "./components/Art";

import "./styls/main.css"

const App = () => {
  return (
    <div className="all">
      <BrowserRouter>
      <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Coding" element={<Coding />} />
          <Route path="/Youtube" element={<Youtube />} />
          <Route path="/Art" element={<Art />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
