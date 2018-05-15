import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Particles from "react-particles-js";
import Stuff from "./Stuff";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Party from "./Party";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="nav-bar">
            <Link className="links" to="/">
              Alex.
            </Link>
            <Link className="links" to="/alexander">
              Interwebs.
            </Link>
            <Link className="links" to="/projects">
              Projects.
            </Link>
            <Link className="links" to="/particles">
              More Particles!!
            </Link>
          </nav>
          <div className="content">
            <Route exact path="/" render={() => <AboutMe />} />
            <Route exact path="/alexander" render={() => <Stuff />} />
            <Route exact path="/projects" render={() => <Portfolio />} />
            <Route exact path="/particles" render={() => <Party />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
