import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Particles from "react-particles-js";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Game from "./Game";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Particles id="particles-js" params={particleParams}>
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
        </Particles>
      </Router>
    );
  }
}

const particleParams = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00D1FF"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 125,
      color: "#EE1616",
      opacity: 0.7,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 800,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 125,
        duration: 0.4
      },
      push: {
        particles_nb: 5
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default App;
