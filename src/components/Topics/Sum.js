import React, { Component } from "react";
export default class ClassName extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }
  handleNumber1Change = event => {
    this.setState({ number1: event.target.value, sum: null });
  };
  handleNumber2Change = event => {
    this.setState({ number2: event.target.value, sum: null });
  };
  calculateSum = () => {
    this.setState({ sum: +this.state.number1 + +this.state.number2 });
  };
  render() {
    return (
      <div id="Sum" className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="number"
          className="inputLine"
          value={this.state.number1}
          onChange={this.handleNumber1Change}
        />
        <input
          className="inputLine"
          type="number"
          value={this.state.number2}
          onChange={this.handleNumber2Change}
        />
        <button className="confirmationButton" onClick={this.calculateSum}>
          Find Sum
        </button>
        <span className="resultsBox">
          {this.state.sum !== null
            ? `${this.state.number1} + ${this.state.number2} = ${this.state.sum}`
            : null}
        </span>
      </div>
    );
  }
}
