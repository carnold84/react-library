import styled from 'styled-components';
import { flexbox, grid, layout, space } from 'styled-system';

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
const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  grid,
  flexbox,
  layout,
  space
);

export default Box;
