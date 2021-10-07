import styled from 'styled-components';
import Box from '../Box';

export const Wrapper = styled(Box).attrs({
  forwardedAs: 'ul',
})`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;
