import React, { Component } from "react";
export default class FilterObject extends Component {
  render() {
    return (
      <div id="FilterObject" className="puzzleBox filterObjectPB">
        <h4>FilterObject</h4>
        <input className="inputLine" />
        <span className="resultsBox filterObjectRB"></span>
      </div>
    );
  }
}
