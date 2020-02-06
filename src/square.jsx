import React, { Component } from "react";

class Square extends React.Component {
  render() {
    return (
      <div className="square" id={this.props.id} onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
