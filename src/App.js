
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import Home from './pages/Home';
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
      <NavBar/>
        {/* <Hero/> */}
        {/* <NavBar/> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Projects" component={ProjectsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
