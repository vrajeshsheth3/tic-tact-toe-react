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
    return this.state.xIsNext ? "X" : "0";
  }
  handleClick(i) {
    // console.log(e, e.target);
    const squares = this.state.squares.slice();
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
    return "Next Player: " + this.getNextPlayer();
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
