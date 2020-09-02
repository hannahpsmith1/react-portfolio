import React from "react";
import './Hero.css';

function Hero() {
  return (
    <div>
      <div className="hero has-background is-fullheight">
        <img alt="National Parks" className="hero-background is-transparent"
          src="https://cdn.funcheap.com/wp-content/uploads/2015/01/muir-woods-1.jpg" />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered" id="body">
          <h1 class="title">
            Title
        </h1>
          <h2 class="subtitle">
            Subtitle
        </h2>
        </div>
      </div>

    </div>
    // <div>
    //     <h1>Hello</h1>
    // </div>

  );
}

export default Hero;


