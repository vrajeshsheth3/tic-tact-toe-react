import React, { Component } from "react";
import Square from "./square.jsx";

class Board extends React.Component {
  renderSquare(i) {
    return <Square id={i} />;
  }

  renderStatus() {
    return "Next Player: ";
  }

  render() {
    //this.renderPlayer()

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
