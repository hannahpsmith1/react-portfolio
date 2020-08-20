import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ProjectsPage from './pages/ProjectsPage';
import projects from "../projects.json";
import Card from "../components/Card/Card"

const ProjectsPage = (props) => {
    console.log(projects);
    let project = projects[0]
    return (
        // <Card/>
        <div>
            {projects.map(project =>
                <Card
                    key={project.name}
                    name={project.name}
                    image={project.img}
                    github={project.github}
                    deployed={project.deployed}
                />



            )}

        </div>
    );
};

export default ProjectsPage;