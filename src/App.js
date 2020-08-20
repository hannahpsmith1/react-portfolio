
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
