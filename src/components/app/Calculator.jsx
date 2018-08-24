import React, { Component } from 'react';
import './Calculator.css';
import Display from './calculator/Display';
import Keypad from './calculator/Keypad';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
      operators: ['/', 'x', '-', '+'],
      selectedOperator: '',
      storedValue: '',
    };

    this.updateDisplay = this.updateDisplay.bind(this);
    this.setOperator = this.setOperator.bind(this);
  }

  setOperator(value) {
    let { displayValue, selectedOperator, storedValue } = this.state;

    if (selectedOperator === '') {
      storedValue = displayValue;
      displayValue = '0';
      selectedOperator = value;
    } else {
      selectedOperator = value;
    }

    this.setState({ displayValue, selectedOperator, storedValue });
  }

  updateDisplay(value) {
    const { displayValue } = this.state;
    let newDisplayValue = '';

    const cleanedValue =
      value === '.' && displayValue.includes('.') ? '' : value;

    if (cleanedValue === 'ce') {
      newDisplayValue = displayValue.substr(0, displayValue.length - 1);

      if (newDisplayValue === '') {
        newDisplayValue = '0';
      }
    } else if (displayValue.length === 9) {
      newDisplayValue = displayValue;
    } else {
      newDisplayValue =
        displayValue === '0' ? cleanedValue : displayValue + cleanedValue;
    }

    this.setState({ displayValue: newDisplayValue });
  }

  render() {
    const { displayValue, numbers, operators } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          numbers={numbers}
          operators={operators}
          updateDisplay={this.updateDisplay}
          setOperator={this.setOperator}
        />
      </div>
    );
  }
}

export default Calculator;
