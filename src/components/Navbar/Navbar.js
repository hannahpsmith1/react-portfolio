import React from "react";
import './navbar.css';

function NavBar() {
    return (
        // <div className="hero-head">
            <div className="navbar" >
            <div className="container">
                {/* <div className="navbar-brand">
                    <a className="navbar-item logo" href="bulma.html">
                        <img src="images/HannahSmith.png" alt="Logo" />
                    </a> */}
                    <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                    <div className="navbar-end">
                        <nav className="tabs">
                            <div className="container">
                                <ul>
                                    <li className="home"><a>Home</a></li>
                                    <li><a>About Me</a></li>
                                    <li><a id="myAnc2">clickName Here</a></li>
                                    <li><a>Skills</a></li>
                                    <li><a>Employment</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            // </div>
    );

}

export default NavBar;