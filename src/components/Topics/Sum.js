import React, { Component } from "react";
export default class ClassName extends Component {
  render() {
    return (
      <div id="Sum">
        <input
          className="inputLine"
          value={this.state.number1}
          onChange={this.handleNumber1Change}
        />
        <input
          className="inputLine"
          value={this.state.number2}
          onChange={this.handleNumber2Change}
        />
        <button className="confirmationButton" onClick={this.calculateSum}>
          Find Sum
        </button>
        <span className="resultsBox">
          {this.state.sum
            ? `${this.state.number1} + ${this.state.number2} = ${this.state.sum}`
            : null}
        </span>
      </div>
    );
  }
}
