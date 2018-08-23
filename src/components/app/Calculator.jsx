import React, { Component } from 'react';
import './Calculator.css';
import Display from './calculator/Display';
import Keypad from './calculator/Keypad';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      numbers: [],
      operators: [],
    };
  }

  render() {
    const { displayValue, numbers, operators } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad numbers={numbers} operators={operators} />
      </div>
    );
  }
}

export default Calculator;
