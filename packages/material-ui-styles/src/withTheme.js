import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getDisplayName } from '@material-ui/utils';
import { ThemeContext } from './ThemeProvider';

// Provide the theme object as a property to the input component.
const withTheme = () => Component => {
  const WithTheme = React.forwardRef((props, ref) => (
    <ThemeContext.Consumer>
      {theme => {
        return <Component theme={theme} ref={ref} {...props} />;
      }}
    </ThemeContext.Consumer>
  ));

  hoistNonReactStatics(WithTheme, Component);

  WithTheme.propTypes = {};

  if (process.env.NODE_ENV !== 'production') {
    WithTheme.displayName = `WithTheme(${getDisplayName(Component)})`;
  }

  return WithTheme;
};

export default withTheme;
