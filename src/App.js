import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from '../src/Components/gameboard/gameboard';
import PlayerIcon from '../src/Components/playericon/playericon';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerSpot: []
    }
    this.generateBoard = this.generateBoard.bind(this);
  }

  generateBoard() {
    let board = [];
    for(let rowsIndex = 0; rowsIndex < 11; rowsIndex++) {
      let row = [];
      for(let colIndex = 0; colIndex < 11; colIndex++) {
        if(colIndex === 0 || 10) {
          row.push('X');
        } else {
          row.push(' ');
        }
      }
      if(rowsIndex === 0 || 10){
        board.push('X');
      } else {
        board.push(row);
      }
    }
    board.map(row => row.join(' | ')).join('\n');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bomb-Game</h1>
        </header>
        <p className="App-intro">
          {this.generateBoard()}
        </p>
      </div>
    );
  }
}

export default App;
