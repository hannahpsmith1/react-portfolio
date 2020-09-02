import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard/Card"
import Hero from '../components/Hero/HeroToo';
import Wrapper from "../components/Wrapper"
import NavBar from "../components/Navbar/Navbar";

class ProjectsCards extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        projects: projects
    };

    removeFriend = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const projects = this.state.projects.filter(projects => projects.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ projects: projects });
      };

    render() {
        return (
            <Wrapper>
                {this.state.projects.map(projects => (
                    <ProjectCard
                    removeFriend={this.removeFriend}
                        key={projects.name}
                        name={projects.name}
                        description={projects.description}
                        image={projects.img}
                        github={projects.github}
                        deployed={projects.deployed}
                    />
                )

                )}
                <NavBar/>
            </Wrapper>
        );
    }
}

export default ProjectsCards;