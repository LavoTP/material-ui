import React from 'react';
import { assert } from 'chai';
import { createMount } from '@material-ui/core/test-utils';
import withStyles from './withStyles';

describe('withStyles', () => {
  let mount;

  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  describe('refs', () => {
    it('forwards ref to class components', () => {
      // eslint-disable-next-line react/prefer-stateless-function
      class TargetComponent extends React.Component {
        render() {
          return null;
        }
      }
      const StyledTarget = withStyles({})(TargetComponent);

      const ref = React.createRef();
      // https://github.com/airbnb/enzyme/issues/1852#issuecomment-433145879
      mount(
        <>
          <StyledTarget ref={ref} />
        </>,
      );

      assert.instanceOf(ref.current, TargetComponent);
    });

    it('forwards refs to React.forwardRef objects', () => {
      const StyledTarget = withStyles({})(
        React.forwardRef((props, ref) => <div {...props} ref={ref} />),
      );

      const ref = React.createRef();
      mount(
        <>
          <StyledTarget ref={ref} />
        </>,
      );

      assert.strictEqual(ref.current.nodeName, 'DIV');
    });
  });
});
