import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Blend from './Blend';

const RADIUS = 17;

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
    /**
     * Styles applied to the root element
     */
    root: {
      width: `${RADIUS * 2}px !important`,
      height: `${RADIUS * 2}px !important`,
      backgroundColor: colors.primary,
      borderRadius: '50%',
      bottom: 7,
      opacity: 0,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      transition: [commonTransitions, hideTransitiions].join(', '),
      zIndex: 2,
      '&$activated, &$jumped': {
        opacity: 1,
      },
      '&$vertical': {
        bottom: 0,
        left: 15,
      },
    },
    blendPath: {
      fill: colors.primary,
    },
    blendSvg: {
      bottom: 24,
      position: 'relative',
    },
    text: {
      color: theme.palette.getContrastText(colors.primary),
      display: 'inline-flex',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(12),
      justifyContent: 'center',
      paddingTop: 9,
      width: '100%',
    },
    /* Class applied to the root element to trigger JSS nested styles if `activated`. */
    activated: {},
    /* Class applied to the root element to trigger JSS nested styles if `jumped`. */
    jumped: {},
    /* Class applied to the root element to trigger JSS nested styles if `vertical`. */
    vertical: {},
  };
};

class SliderValueLabel extends React.PureComponent {
  render() {
    const {
      classes,
      className: classNameProp,
      state,
      style,
      theme,
      value,
      vertical,
      ...rest
    } = this.props;

    const className = classNames(classNameProp, classes.root, {
      [classes.activated]: state === 'activated',
      [classes.disabled]: state === 'disabled',
      [classes.jumped]: state === 'jumped',
      [classes.vertical]: vertical,
    });

    const labelClasses = classNames(classes.text);

    return (
      <>
        <div className={className} style={style} {...rest}>
          <span className={labelClasses}>{value}</span>
          <Blend
            className={classNames(classes.blendSvg)}
            pathClassName={classNames(classes.blendPath)}
          />
        </div>
      </>
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
   * @ignore
   * controlled by the Slider
   */
  state: PropTypes.string,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * @ignore
   * controlled by the Slider
   */
  value: PropTypes.number.isRequired,
  /**
   * @ignore
   * controlled by the Slider
   */
  vertical: PropTypes.bool,
};

SliderValueLabel.muiName = 'SliderValueLabel';

export default withStyles(styles, { name: 'MuiSliderValueLabel', withTheme: true })(
  SliderValueLabel,
);
