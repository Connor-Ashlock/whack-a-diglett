import React from 'react';
import Game from './game';
import Start from './start';
import Timer from './timer'
import Score from './score';
import Health from './health';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      gender: null,
      hits: 0,
      seconds: 45
    };
    this.startGame = this.startGame.bind(this);
    this.increaseHits = this.increaseHits.bind(this);
    this.startCountdown = this.startCountdown.bind(this)
  }

  startGame(gender) {
    this.setState(state => ({
      isStarted: !state.isStarted,
      gender: gender,
      hits: 0,
      seconds: 45
    }))
  }

  increaseHits() {
    this.setState(state => ({
      hits: state.hits + 1
    }))
  }

  startCountdown() {
    setTimeout(() => {
      this.setState({ seconds: this.state.seconds - 1 })
      if (this.state.seconds === 0) {
        return;
      }
      this.startCountdown();
    }, 1000)
  }

  render() {
    if (!this.state.isStarted) {
      return <Start startGame={this.startGame} />
    }
    return (
      <div className={`game-background ${this.state.gender}`}>
        <Score score={this.state.hits} />
        <Health />
        <Game
          increaseHits={this.increaseHits}
          seconds={this.state.seconds}
          countdown={this.startCountdown}
        />
        <Timer
          restartGame={this.startGame}
          openModal={this.openModal}
          isOpen={this.state.isOpen}
          score={this.state.hits}
          seconds={this.state.seconds}
        />
      </div>
    )
  }
}

export default App;
