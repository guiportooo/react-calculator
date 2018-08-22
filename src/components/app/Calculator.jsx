import React, { Component } from 'react';
import './Calculator.css';
import Display from './calculator/Display';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
    };
  }

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
      </div>
    );
  }
}

export default Calculator;
