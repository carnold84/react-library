import styled from 'styled-components';
import Box from '../Box';

// extend box so we can use styled stystem spacing, sizes etc
export const Wrapper = styled(Box)`
  font-family: ${({ theme }) => theme.button.fontFamily};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  margin: 0 0 20px;

  &.is_h1 {
    font-size: 6.2rem;
    line-height: 1.3;
  }

  &.is_h2 {
    font-size: 5.4rem;
    line-height: 1.35;
  }

  &.is_h3 {
    font-size: 4.6rem;
    line-height: 1.4;
  }

  &.is_h4 {
    font-size: 3.8rem;
    line-height: 1.45;
  }

  &.is_h5 {
    font-size: 3rem;
    line-height: 1.5;
  }

  &.is_h6 {
    font-size: 2.2rem;
    line-height: 1.55;
  }

  &.is_p {
    font-size: 1.4rem;
    line-height: 1.6;
  }
`;
