// @inheritedComponent Slider
import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../Slider';
import SliderValueLabel from '../SliderValueLabel';

function DiscreteSlider(props) {
  const { SliderValueLabelProps, ...other } = props;
  return (
    <Slider {...other}>
      <SliderValueLabel {...SliderValueLabelProps} />
    </Slider>
  );
}

DiscreteSlider.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  SliderValueLabelProps: PropTypes.object,
  step: PropTypes.number.isRequired,
};

export default DiscreteSlider;
