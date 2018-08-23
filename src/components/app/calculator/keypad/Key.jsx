import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

const Key = ({ keyType, keyValue }) => (
  <div className={`key-container ${keyType}`}>
    <p className="key-value">{keyValue}</p>
  </div>
);

Key.propTypes = {
  keyValue: PropTypes.string.isRequired,
  keyType: PropTypes.string.isRequired,
};

export default Key;
