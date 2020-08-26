
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import Home from './pages/Home';
// import Hero from "./components/Hero/Hero";
import Hero from "./components/Hero/HeroToo";
import NavBar from "./components/Navbar/Navbar";
// import Skills from "./components/Skills/Skills";
// import Employment from "./components/Employment/Employment";

function App() {
  return (
    <Router>
      <div>
        {/* <NavBar/> */}
        {/* <Hero/> */}
        {/* <Hero/> */}
        {/* <NavBar/> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Projects" component={ProjectsPage} />
          {/* <Route exact path="/Skills" component={Skills} /> */}
          {/* <Route exact path="/Employment" component={Employment} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
