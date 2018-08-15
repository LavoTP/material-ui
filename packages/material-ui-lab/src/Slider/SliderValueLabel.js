import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => {
  const commonTransitionsOptions = {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeOut,
  };

  const commonTransitionsProperty = ['left', 'top'];

  const commonTransitions = theme.transitions.create(
    commonTransitionsProperty,
    commonTransitionsOptions,
  );

  const hideTransitiions = theme.transitions.create(['opacity'], commonTransitionsOptions);

  const colors = {
    primary: theme.palette.primary.main,
  };

  return {
    root: {
      width: 32,
      height: 32,
      backgroundColor: colors.primary,
      borderRadius: '50%',
      bottom: 15,
      opacity: 0,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      transition: [commonTransitions, hideTransitiions].join(', '),
      zIndex: 2,
      '&$activated': {
        opacity: 1,
        // remove the commonTransitions to react instantly to position changes
        // otherwise label drags behind thumb
        // transition: hideTransitiions,
      },
    },
    activated: {},
    blend: {
      fill: colors.primary,
    },
    text: {},
    vertical: {
      bottom: 0,
      left: 15,
    },
  };
};

class SliderValueLabel extends React.PureComponent {
  render() {
    const { classes, state, theme, value, vertical, ...rest } = this.props;

    const className = classNames(classes.root, {
      [classes.activated]: state === 'activated',
      [classes.vertical]: vertical,
    });

    return (
      <div className={className} {...rest}>
        <div className={classes.text}>{value}</div>
      </div>
    );
  }
}

SliderValueLabel.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * state of the corresponding slider
   */
  state: PropTypes.string,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * The value of the slider
   */
  value: PropTypes.number.isRequired,
  vertical: PropTypes.bool,
};

export default withStyles(styles, { name: 'MuiSliderValueLabel', withTheme: true })(
  SliderValueLabel,
);
