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
  }
  handleInputChange(event) {
    this.setState({ ...this.state, userInput: event.target.value });
  }
  filterArray() {
    this.state.unFilteredArray.map(obj => {});
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
        <button className="confirmationButton">Filter</button>
        <span className="resultsBox filterObjectRB"></span>
      </div>
    );
  }
}
