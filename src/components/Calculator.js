/* eslint-disable no-new-func */
import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: "",
      error: null,
    };
  }

  // Component lifecycle methods

  // Event listener for keyboard input
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // Event handlers

  // Handle keyboard input
  handleKeyPress = (e) => {
    e.preventDefault();

    // Switch statement to handle different keyboard inputs
    switch (e.key) {
      case "Escape":
        this.handleClear(); // Clear input
        break;
      case "Backspace":
        this.handleDelete(); // Delete last character
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        // Prevent arithmetic function input from the keyboard
        break;
      default:
        if (/^\d$/.test(e.key)) {
          this.handleNumberInput(e.key); // Handle number input
        }
    }
  };

  // Handle number input from the keyboard
  handleNumberInput = (key) => {
    const input = this.state.input + key;
    this.updateInputState(input);
  };

  // Handle clear keyboard input (Esc key)
  handleClear = () => {
    this.updateInputState("");
  };

  // Handle delete (backspace) keyboard input
  handleDelete = () => {
    const currentInput = this.state.input;
    this.updateInputState(currentInput.slice(0, -1));
  };

  // Handle arithmetic function button click
  handleFunctionClick = (operation) => () => {
    const input = this.state.input + " " + operation + " ";
    this.updateInputState(input);
  };

  // Custom expression evaluator
  evaluateExpression = (expression) => {
    try {
      const result = this.safeEval(expression);
      return result;
    } catch (error) {
      return null;
    }
  };

  /* // Safe eval function using Function constructor
  safeEval = (expression) => {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
    const result = Function(`"use strict";return (${sanitizedExpression})`)();
    return result;
  };*/

  // Safe eval function using Function constructor
  safeEval = (expression) => {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
    const result = new Function(
      `"use strict";return (${sanitizedExpression})`
    )();
    return result.toString();
  };

  // Update input state and evaluate expression
  updateInputState = (newInput) => {
    this.setState({ input: newInput, error: null }, () => {
      if (newInput.trim() === "") {
        this.setState({ result: "0" });
      } else {
        const result = this.evaluateExpression(newInput);
        if (result !== null) {
          this.setState({ result: result.toString() });
        } else {
          // Error handling logic
          //Do nothing
        }
      }
    });
  };

  // Render method
  render() {
    return (
      <div className="calculator">
        <div className="calc-header">
          <h1>Simple Calculator</h1>
        </div>
        {/* Input field for displaying current input */}
        <div className="section-one">
          <div className="input-field">
            <input
              type="text"
              readOnly
              placeholder="Type numbers here"
              value=""
            />
          </div>

          {/* Buttons for arithmetic functions */}
          <div className="operation-buttons">
            <button onClick={this.handleFunctionClick("+")}>+</button>
            <button onClick={this.handleFunctionClick("-")}>-</button>
            <button onClick={this.handleFunctionClick("*")}>*</button>
            <button onClick={this.handleFunctionClick("/")}>/</button>
          </div>
        </div>

        {/* Display input */}
        <div className="section-two">
          <div className="input-display">
            <p>{this.state.input || "0"}</p>
          </div>

          {/* Display result or error */}
          <div className="result">
            {this.state.error && <p>Error: {this.state.error}</p>}
            {this.state.result !== "" && !this.state.error && (
              <p>Result: {this.state.result}</p>
            )}
            {this.state.result === "" && !this.state.error && <p>Result: 0</p>}
          </div>
        </div>

        <div>
          <p>To clear input press Esc</p>
          <p>To delete last character press Backspace </p>
        </div>
      </div>
    );
  }
}

export default Calculator;
