import React, { Component } from "react";

class Square extends React.Component {
  render() {
    return <button className="square" id={this.props.sqId}></button>;
  }
}

export default Square;
