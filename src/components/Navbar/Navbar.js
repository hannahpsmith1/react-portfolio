import React from "react";
import './navbar.css';

function NavBar() {
    return (

        
        <div class="tabs is-boxed is-fullwidth">
            <div className="container">
                <ul>
                    <li className="home"><a href="/">Home</a></li>
                    <li><a href="/AboutMe">About Me</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    {/* <li><a href="/Skills">Skills</a></li>
                    <li><a href="/Employment">Employment</a></li> */}
                </ul>
            </div>
        </div>

    );

}

export default NavBar;