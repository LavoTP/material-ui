import * as React from 'react';
import { StandardProps } from '../StandardProps';
import { FadeProps } from '../Fade';
import { TransitionProps } from '../transitions/transition';

export interface BackdropProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement> & Partial<FadeProps>,
      BackdropClassKey
    > {
  invisible?: boolean;
  onClick?: React.ReactEventHandler<{}>;
  open: boolean;
  transitionDuration?: TransitionProps['timeout'];
}

export type BackdropClassKey = 'root' | 'invisible';

declare const Backdrop: React.ComponentType<BackdropProps>;

export default Backdrop;
