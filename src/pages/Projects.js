import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projects from "../projects.json";
import Card from "../components/Card/Card"
import Hero from '../components/Hero/HeroToo';

class Projects extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      projects: projects
    };

    render () {
        return (
            <Hero>
                {this.state.projects.map(projects => (
                    <Card
                    key={projects.name}
                    name={projects.name}
                    image={projects.img}
                    github={projects.github}
                    deployed={projects.deployed}
                />
                )

                )}
            </Hero>
        );
                }
    }

    export default Projects;