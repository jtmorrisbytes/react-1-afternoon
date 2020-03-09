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
        "long random list of random random words"
      ],
      unfilteredArray: [],
      userInput: ""
    };
  }

  render() {
    return (
      <div id="FilterString" className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {this.state.unFilteredArray.join(", ")}
        </span>
        <input className="inputLine" value={""} onChange={() => {}} />
        <button className="confirmationButton" onClick={() => {}}>
          Filter the string
        </button>
        <span className="resultsBox filterStringRB"></span>
      </div>
    );
  }
}
