import React, { Component } from "react";
export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Jordan",
          favFood: "Pizza"
        },
        { name: "Brittany", hometown: "caddo mills" }
      ],
      filteredArray: [],
      userInput: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.filterArray = this.filterArray.bind(this);
  }
  handleInputChange(event) {
    this.setState({ ...this.state, userInput: event.target.value });
  }
  filterArray() {
    let filtered = [];
    this.state.unFilteredArray.forEach(obj => {
      if (obj[this.state.userInput]) {
        filtered.push(obj);
      }
    });
    this.setState({ ...this.state, filteredArray: filtered });
  }
  render() {
    return (
      <div id="FilterObject" className="puzzleBox filterObjectPB">
        <h4>FilterObject</h4>
        <input
          className="inputLine"
          onChange={this.handleInputChange}
          value={this.state.userInput}
        />
        <button className="confirmationButton" onClick={this.filterArray}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          {this.state.filteredArray.map(obj => {
            return JSON.stringify(obj);
          })}
        </span>
      </div>
    );
  }
}
