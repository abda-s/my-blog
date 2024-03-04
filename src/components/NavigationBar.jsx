import React from "react";
import { Link } from "react-router-dom";
import "../styls/Navbar.css"

const Navlinks = [
    {
        title: "Home.",
        link: "/"
    },
    {
        title: "About Me.",
        link: "/AboutMe"
    },
    {
        title: "Coding.",
        link: "/Coding"
    },
    {
        title: "Youtube.",
        link: "/Youtube"
    },
    {
        title: "Art.",
        link: "/Art"
    }
]

const NavigationBar = () => {
    return (
        <div className="navbar"> {/* Use className instead of class */}
            <h1 className="logo">Abdullah Salameh.</h1>
            <ul>
                {Navlinks.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link} >{item.title}</Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default NavigationBar;
