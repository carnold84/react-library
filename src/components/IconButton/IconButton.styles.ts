import styled from 'styled-components';
import Box from '../Box';

// extend box so we can use styled stystem spacing, sizes etc
export const Wrapper = styled(Box)`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
  display: inline-flex;
  fill: ${({ theme }) => theme.iconButton.fill};
  justify-content: center;
  padding: 2px;

  &:hover {
    fill: ${({ theme }) => theme.iconButton._hover.fill};
  }

  &:disabled {
    fill: ${({ theme }) => theme.iconButton._disabled.fill};
    pointer-events: none;
  }

  &.is_primary {
    fill: ${({ theme }) => theme.iconButton._primary.fill};

    &:hover {
      fill: ${({ theme }) => theme.iconButton._primary._hover.fill};
    }

    &:disabled {
      fill: ${({ theme }) => theme.iconButton._primary._disabled.fill};
      pointer-events: none;
    }
  }
`;
