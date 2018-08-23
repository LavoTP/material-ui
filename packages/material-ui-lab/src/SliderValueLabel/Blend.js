import PropTypes from 'prop-types';
import * as React from 'react';

function Blend(props) {
  const { className, pathClassName } = props;

  return (
    <svg width="34" height="63" className={className}>
      <path
        className={pathClassName}
        d={[
          'M4.979184719828693 29.02081528017131',
          'C22.656854249492383 46.698484809834994, 14.878679656440356 50.63603896932107, 12.757359312880714 52.757359312880716',
          'A6 6 0 0 1 21.242640687119284 52.757359312880716',
          'C19.121320343559642 50.63603896932108, 11.34314575050762 46.698484809834994, 29.02081528017131 29.020815280171306',
          'A17 17 0 0 1 4.979184719828693 29.02081528017131',
          'Z',
        ].join(' ')}
      />
    </svg>
  );
}

Blend.propTypes = {
  className: PropTypes.string,
  pathClassName: PropTypes.string,
};

export default Blend;
