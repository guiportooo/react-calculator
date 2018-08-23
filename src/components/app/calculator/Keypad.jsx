import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';

const Keypad = ({ numbers, operators }) => {
  const mapNumbers = numbers.map(number => <p key={number}>{number}</p>);

  const mapOperators = operators.map(operator => (
    <p key={operator}>{operator}</p>
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{mapNumbers}</div>
      <div className="operators-container">{mapOperators}</div>
    </div>
  );
};

Keypad.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  operators: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Keypad;
