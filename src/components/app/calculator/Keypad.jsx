import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';
import Key from './keypad/Key';

const Keypad = ({ numbers, operators }) => {
  const mapNumbers = numbers.map(number => (
    <Key key={number} keyType="number-key" keyValue={number} />
  ));

  const mapOperators = operators.map(operator => (
    <Key key={operator} keyType="operator-key" keyValue={operator} />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{mapNumbers}</div>
      <div className="operators-container">{mapOperators}</div>
      <div className="submit-container">
        <Key keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  operators: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Keypad;
