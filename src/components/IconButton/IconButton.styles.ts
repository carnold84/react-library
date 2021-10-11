import styled from 'styled-components';
import Box from '../Box';
import Button from '../Button';

// extend box so we can use styled stystem spacing, sizes etc
export const Wrapper = styled(Button)`
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 2px;

  &:hover {
    background-color: transparent;
  }

  &:disabled {
    background-color: transparent;
  }

  &.is_primary {
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    &:disabled {
      background-color: transparent;
    }
  }
`;
