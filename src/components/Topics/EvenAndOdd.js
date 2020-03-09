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
    // function.call(this) might be a better solution for
    // one off fires.
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleListSubmit = this.handleListSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({ ...this.state, userInput: event.target.value });
  }
  handleListSubmit() {}
  isListInputValid(inputString) {
    return this.splitArrayRegex.test(inputString);
  }
  getNumbersFromList() {}
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
        <button className="confirmationButton">Submit</button>
        <span id="resultsBox">Evens</span>
        <span id="resultsBox">Odds</span>
      </div>
    );
  }
}
