import styled from 'styled-components';
import { flexbox, grid, layout, space } from 'styled-system';

export const Wrapper = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${grid}
  ${flexbox}
  ${layout}
  ${space}
`;
