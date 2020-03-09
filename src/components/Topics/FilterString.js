import React, { Component } from "react";
export default class FilterString extends Component {
  render() {
    return (
      <div id="FilterString" className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText"></span>
        <input className="inputLine" value={""} onChange={() => {}} />
        <button className="confirmationButton" onClick={() => {}}>
          Filter the string
        </button>
        <span className="resultsBox filterStringRB"></span>
      </div>
    );
  }
}
