import React, { Component } from "react";
export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "Potatoes",
        "meatballs",
        "onions",
        "Chewing Gum",
        "Video Games",
        "long",
        "random list",
        "of random",
        "random words"
      ],
      filteredArray: [],
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterString = this.filterString.bind(this);
  }
  handleChange(event) {
    this.setState({ ...this.state, userInput: event.target.value });
  }
  filterString() {
    let filtered = [];
    this.state.unFilteredArray.forEach(string => {
      if (string.includes(this.state.userInput)) {
        filtered.push(string);
      }
    });
    this.setState({ ...this.state, filteredArray: filtered });
  }
  render() {
    return (
      <div id="FilterString" className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {this.state.unFilteredArray.join(", ")}
        </span>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <button className="confirmationButton" onClick={this.filterString}>
          Filter the string
        </button>
        <span className="resultsBox filterStringRB">
          {this.state.filteredArray.join(", ")}
        </span>
      </div>
    );
  }
}
