import React from "react";
import { Link } from "react-router-dom";
import "../styls/Navbar.css"
const NavigationBar = () => {
    return (
        <div className="navbar"> {/* Use className instead of class */}
            <h1 className="logo">Abdullah Salameh.</h1>
            <ul>
                <li><Link to="/" className="coloer-blue">Home.</Link></li>
                <li><Link to="/AboutMe" className="coloer-orange">About Me.</Link></li>
                <li><Link to="/Coding" className="coloer-green">Coding.</Link></li>
                <li><Link to="/Youtube" className="coloer-red">Youtube.</Link></li>
                <li><Link to="/Art" className="coloer-blue">Art.</Link></li>
            </ul>
        </div>
    )
}

export default NavigationBar;
