import React from 'react';
import { Wrapper } from './Box.styles';

type BoxProps = {
  [x: string]: any;
};

/**
 * Base UI component that implements [Styled System](https://styled-system.com).
 *
 * All components extend `Box` component to allow the use of the following
 * Styled System apis:
 *
 * * [flexbox](https://styled-system.com/api#flexbox)
 * * [grid layout](https://styled-system.com/api#grid-layout)
 * * [layout](https://styled-system.com/api#layout)
 * * [responsive styles](https://styled-system.com/responsive-styles)
 * * [spacing](https://styled-system.com/api#space)
 */
const Box = ({ ...props }: BoxProps) => {
  return <Wrapper {...props} />;
};

export default Box;
