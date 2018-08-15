import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

class LabeledSlider extends React.Component {
  state = {
    value: 50,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          min={0}
          max={100}
          step={10}
          value={value}
          onChange={this.handleChange}
          showValueLabel
        />
      </div>
    );
  }
}

LabeledSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabeledSlider);
