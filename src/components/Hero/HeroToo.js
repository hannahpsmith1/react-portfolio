import React from "react";
import './Hero.css';
import Navbar from "../Navbar/Navbar"
import Card from "../ProjectCard/Card"


function Hero() {
    return (
        <div className="hero has-background is-fullheight">
            <img alt="National Parks" className="hero-background is-transparent"
                // src="https://cdn.funcheap.com/wp-content/uploads/2015/01/muir-woods-1.jpg" 
                src="https://i.postimg.cc/3rkCr6Dk/90-D92-CD3-724-B-40-B3-9-D05-1-BB17-FFD3-C7-E-1-105-c.jpg"/>

            <div className="hero-head">
                <header className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src="https://i.postimg.cc/y8PGH5wD/hannahsmith.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                </header>
            </div>





            <Navbar />
        </div >
    );
}

export default Hero;