import React, { Component } from "react";
export default class Palindrome extends Component {
  constructor() {
    super();
    this.isPalindrome = '"$0" \nis a palindrome';
    this.isNotPalindrome = '"$0" \nis NOT a palindrome';
    this.punctuation = "~`!.,?'\";:";
    this.state = {
      userInput: "",
      palindrome: "",
      ignorePunctuation: false
    };
    this.checkPalindrome = this.checkPalindrome.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggleIgnorePunctuation = this.handleToggleIgnorePunctuation.bind(
      this
    );
  }
  handleInputChange(event) {
    this.setState({ userInput: event.target.value });
  }
  handleToggleIgnorePunctuation() {
    this.setState({ ignorePunctuation: !this.state.ignorePunctuation });
  }
  checkPalindrome() {
    // reset user input when done
    let inputString = this.state.userInput.slice();
    if (this.state.ignorePunctuation) {
      for (let i = 0; i < this.punctuation.length; i++) {
        inputString = inputString.replace(this.punctuation[i], "");
        console.log(this.punctuation[i]);
      }
      inputString = inputString.replace(/\s/g, "");
    }

    for (let i = 0; i < Math.floor(inputString.length / 2); i++) {
      if (
        inputString[i].toLocaleLowerCase() !==
        inputString[inputString.length - (1 + i)].toLocaleLowerCase()
      ) {
        this.setState({
          palindrome: this.isNotPalindrome.replace("$0", this.state.userInput)
        });
        return false;
      } else {
      }
    }
    this.setState({
      palindrome: this.isPalindrome.replace("$0", this.state.userInput)
    });
    return true;
  }
  // this.setState({ userInput: "" });
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <div>
          <input
            type="checkbox"
            checked={this.state.ignorePunctuation}
            onChange={this.handleToggleIgnorePunctuation}
          />
          <label>Ignore punctuation</label>
        </div>
        <br />

        <button className="confirmationButton" onClick={this.checkPalindrome}>
          Check Palindrome
        </button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}
