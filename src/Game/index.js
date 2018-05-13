import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="game-container">
        <header>
          <h1>Game Title</h1>
        </header>
        <div className="game-play">
          <div id="particles-js" />
        </div>
        <footer>
          <h2>Have Fun!</h2>
        </footer>
      </div>
    );
  }
}

export default Game;
