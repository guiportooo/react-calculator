import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

const Key = ({ keyAction, keyType, keyValue }) => (
  <div
    className={`key-container ${keyType}`}
    onClick={() => keyAction(keyValue)}
    role="presentation"
  >
    <p className="key-value">{keyValue}</p>
  </div>
);

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyValue: PropTypes.string.isRequired,
  keyType: PropTypes.string.isRequired,
};

export default Key;
