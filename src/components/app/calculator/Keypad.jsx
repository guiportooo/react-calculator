import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';
import Key from './keypad/Key';

const Keypad = ({
  numbers,
  operators,
  updateDisplay,
  setOperator,
  callOperator,
}) => {
  const mapNumbers = numbers.map(number => (
    <Key
      key={number}
      keyAction={updateDisplay}
      keyType="number-key"
      keyValue={number}
    />
  ));

  const mapOperators = operators.map(operator => (
    <Key
      key={operator}
      keyAction={setOperator}
      keyType="operator-key"
      keyValue={operator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{mapNumbers}</div>
      <div className="operators-container">{mapOperators}</div>
      <div className="submit-container">
        <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  operators: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateDisplay: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  callOperator: PropTypes.func.isRequired,
};

export default Keypad;
