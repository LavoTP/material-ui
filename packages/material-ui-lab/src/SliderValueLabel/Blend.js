import PropTypes from 'prop-types';
import * as React from 'react';

function Blend(props) {
  const { className, pathClassName } = props;

  return (
    <svg width="34" height="64" className={className}>
      <path
        className={pathClassName}
        d="M5 29 C23 47, 13 53, 13 53 A6 6 0 1 0 21 53 C21 53, 11 47, 29 29 A17 17 0 1 0 5 29 Z"
      />
    </svg>
  );
}

Blend.propTypes = {
  className: PropTypes.string,
  pathClassName: PropTypes.string,
};

export default Blend;
