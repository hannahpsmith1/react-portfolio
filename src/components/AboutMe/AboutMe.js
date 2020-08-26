import React from "react";
import Hero from "../components/Hero/Hero"
// import Slack from "../../public/img/Slack.jpg";

const AboutMe = () => {
    return (
        <div class="card columns is-half is-offset-one-quarter is-multiline">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="../img/Slack.jpg" alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="https://i.postimg.cc/jqv0KDPx/Slack.jpg" alt="Placeholder image" />
                            
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">Hannah Smith</p>
                        <p class="subtitle is-6">
                            <span class="icon">
                                <i class="fab fa-twitter"></i>
                            </span>
              @hannahpsmith2
              </p>
                        <p class="subtitle is-6">
                            <span class="icon">
                                <i class="fa fa-envelope"></i>
                            </span>
                hannahpsmith1@gmail.com</p>
                        <p class="subtitle is-6">
                            <span class="icon">
                                <i class="fa fa-phone"></i>
                            </span>
                860-555-1415</p>
                        <a href="Images/Copy of Hannah Smith 2020 Resume.pdf">
                            <span class="icon">
                                <i class="fa-file-pdf-o"></i>
                            </span>
                  Resume</a>
                    </div>
                </div>

                <div class="content is-multiline">
                    Welcome.  I'm Hannah Smith.  I am currently enrolled with the UC Berkeley Extension Coding Bootcamp course.  My Bachelor's of Science Degree comes from Rensselaer Polytechnic Institute with a concentration in Geology.  My <a href="https://keckgeology.org/wp-content/uploads/26th-keck-symposium-volume/26thSymVol_Bivalve_Smith.pdf">Undergraduate Thesis</a>  was in the study of Carbon Cycling in Freshwater Bivalve Shells across the Cretaceous-Tertiary Boundary.
                        I enjoy hiking, scuba diving, and general adentures.  My favorite national park has been Yosemite.  One of my life goals is to visit all 62 (and hopefully more to come).
            <a href="https://keckgeology.org/wp-content/uploads/26th-keck-symposium-volume/26thSymVol_Bivalve_Smith.pdf">Undergraduate Thesis</a>
          </div>
        </div>
      </div>
        
    );
};

export default AboutMe;