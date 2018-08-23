import * as React from 'react';
import { StandardProps } from '@material-ui/core';

export interface SliderValueLabelProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, SliderValueLabelClassKey> {

}

export type SliderValueLabelClassKey =
  | 'root'
  | 'blendPath'
  | 'blendSvg'
  | 'text'
  | 'activated'
  | 'jumped'
  | 'vertical';

declare const SliderValueLabel: React.ComponentType<SliderValueLabelProps>;

export default SliderValueLabel;
