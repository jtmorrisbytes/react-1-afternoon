import React, { Component } from "react";
export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evensArray: [],
      oddsArray: [],
      userInput: ""
    };
    this.splitArrayRegex = /(\d+),?/g;
    this.isValidListRegex = /(\d+),?/;
    // function.call(this) might be a better solution for
    // one off fires.
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleListSubmit = this.handleListSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({ ...this.state, userInput: event.target.value });
  }
  handleListSubmit() {
    if (this.isListInputValid(this.state.userInput)) {
      let numbers = this.state.userInput.split(",");
      let evens = [];
      let odds = [];
      numbers.forEach(number => {
        if (number % 2 === 0) {
          evens.push(number);
        } else {
          odds.push(number);
        }
      });
      this.setState({
        ...this.state,
        evensArray: evens,
        oddsArray: odds
      });
    } else {
      console.log("not a valid list", this.state.userInput);
    }
  }
  isListInputValid(inputString) {
    if (inputString.endsWith(",")) {
      return false;
    }
    return this.isValidListRegex.test(inputString);
  }
  calculateOddEven() {}
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>EvensAndOdds</h4>
        <input
          onChange={this.handleInputChange}
          value={this.state.userInput}
          placeholder="1,2,3,4"
          className="inputLine"
        />
        <button className="confirmationButton" onClick={this.handleListSubmit}>
          Submit
        </button>
        <span className="resultsBox">{this.state.evensArray.join(", ")}</span>
        <span className="resultsBox">{this.state.oddsArray.join(", ")}</span>
      </div>
    );
  }
}
