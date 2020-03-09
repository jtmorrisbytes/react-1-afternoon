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
        { name: "Brittany", favFood: "Chicken" }
      ]
    };
  }
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
