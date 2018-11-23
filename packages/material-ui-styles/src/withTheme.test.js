import React from 'react';
import { assert } from 'chai';
import { createMount } from '@material-ui/core/test-utils';
import PropTypes from 'prop-types';
import withTheme from './withTheme';
import ThemeProvider from './ThemeProvider';

describe('withTheme', () => {
  let mount;

  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should inject the theme', () => {
    function Test(props) {
      return <span>{props.theme.foo}</span>;
    }

    Test.propTypes = {
      theme: PropTypes.object,
    };

    const TestWithTheme = withTheme()(Test);

    const wrapper = mount(
      <ThemeProvider theme={{ foo: 'foo' }}>
        <TestWithTheme />
      </ThemeProvider>,
    );
    assert.strictEqual(wrapper.text(), 'foo');
  });

  describe('refs', () => {
    it('forwards ref to class components', () => {
      // eslint-disable-next-line react/prefer-stateless-function
      class TargetComponent extends React.Component {
        render() {
          return null;
        }
      }
      const ThemedTarget = withTheme({})(TargetComponent);

      const ref = React.createRef();
      mount(
        <>
          <ThemedTarget ref={ref} />
        </>,
      );

      assert.instanceOf(ref.current, TargetComponent);
    });

    it('forwards refs to React.forwardRef objects', () => {
      const ThemedTarget = withTheme()(
        React.forwardRef((props, ref) => <div {...props} ref={ref} />),
      );

      const ref = React.createRef();
      mount(
        <>
          <ThemedTarget ref={ref} />
        </>,
      );

      assert.strictEqual(ref.current.nodeName, 'DIV');
    });
  });
});
