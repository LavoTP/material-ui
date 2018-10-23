import * as React from 'react';
import { StandardProps, PropTypes } from '../StandardProps';

export interface NotchedOutlineProps
  extends StandardProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, NotchedOutlineClassKey> {
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  labelWidth: number;
  notched: boolean;
}

export type NotchedOutlineClassKey = 'root' | 'legend' | 'focused' | 'error' | 'disabled';

declare const NotchedOutline: React.ComponentType<NotchedOutlineProps>;

export default NotchedOutline;
