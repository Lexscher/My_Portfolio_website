import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Game from "./Game";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="nav-bar">
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/alexander">
              About Me
            </Link>
            <Link className="links" to="/projects">
              Projects I've worked on
            </Link>
            <Link className="links" to="/play">
              Check out this fun game!
            </Link>
          </nav>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/alexander" render={() => <AboutMe />} />
          <Route exact path="/projects" render={() => <Portfolio />} />
          <Route exact path="/play" render={() => <Game />} />
        </div>
      </Router>
    );
  }
}

export default App;
