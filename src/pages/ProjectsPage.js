import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projects from "../projects.json";
import Card from "../components/Card/Card"
import Hero from '../components/Hero/HeroToo';

const ProjectsPage = (props) => {
    
    return (
        
        <div>
            <Hero>
            {projects.map(project =>
                <Card
                    key={project.name}
                    name={project.name}
                    image={project.img}
                    github={project.github}
                    deployed={project.deployed}
                />



            )}
            </Hero>
        </div>
    );
};

export default ProjectsPage;