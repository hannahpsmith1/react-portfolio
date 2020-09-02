
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import AboutMe from './pages/AboutMe';
// import ProjectsPage from './pages/ProjectsPage';
import ProjectsCards from './pages/Projects';
import Home from './pages/Home';
// import Hero from "./components/Hero/Hero";
import Hero from "./components/Hero/HeroToo";
import NavBar from "./components/Navbar/Navbar";
import Wrapper from './components/Wrapper';
// import Skills from "./components/Skills/Skills";
// import Employment from "./components/Employment/Employment";

function App() {
  return (
    <Router>
      <div>
        {/* <Wrapper> */}
          
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Projects" component={ProjectsCards} />
          {/* <Route exact path="/Skills" component={Skills} /> */}
          {/* <Route exact path="/Employment" component={Employment} /> */}
        </Switch>
        
        {/* </Wrapper> */}
      </div>
    </Router>
  );
}

export default App;
