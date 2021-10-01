import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

/**
 * Base UI component
 */
const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  layout,
  flexbox
);

export default Box;
