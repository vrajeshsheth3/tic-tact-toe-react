import React, { Component } from "react";
import Square from "./square.jsx";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  getNextPlayer() {
    return this.state.xIsNext ? "X" : "O";
  }
  handleClick(i) {
    // console.log(e, e.target);
    let winner = this.isThereAWinner();
    const squares = this.state.squares.slice();
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.getNextPlayer();

    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  }
  renderSquare(i) {
    return (
      <Square
        id={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderStatus() {
    const winner = this.isThereAWinner();
    if (winner) {
      return winner + " wins!";
    }
    return "Next Player: " + this.getNextPlayer();
  }

  isThereAWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let squares = this.state.squares.slice();
    for (var i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }

  render() {
    return (
      <div>
        <div className="status">{this.renderStatus()}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
