import * as React from 'react';
import { StandardProps, PropTypes } from '../StandardProps';

export interface FormControlProps
  extends StandardProps<React.HtmlHTMLAttributes<HTMLDivElement>, FormControlClassKey> {
  component?: React.ReactType<FormControlProps>;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  margin?: PropTypes.Margin;
  onBlur?: React.EventHandler<any>;
  onFocus?: React.EventHandler<any>;
  required?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type FormControlClassKey = 'root' | 'marginNormal' | 'marginDense' | 'fullWidth';

declare const FormControl: React.ComponentType<FormControlProps>;

export default FormControl;
