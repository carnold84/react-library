import styled from 'styled-components';
import Box from '../Box';

// extend box so we can use styled stystem spacing, sizes etc
export const Wrapper = styled(Box)`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 3em;
  cursor: pointer;
  display: inline-flex;
  fill: ${({ theme }) => theme.iconButton.fill};
  justify-content: center;
  padding: 4px;

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

  &.is_active {
    background-color: ${({ theme }) => theme.iconButton._active.bgColor};
    border-color: ${({ theme }) => theme.iconButton._active.bgColor};
    fill: ${({ theme }) => theme.iconButton._active.fill};

    &:hover {
      background-color: ${({ theme }) =>
        theme.iconButton._active._hover.bgColor};
      border-color: ${({ theme }) => theme.iconButton._hover.fill};
      fill: ${({ theme }) => theme.iconButton._active._hover.fill};
    }

    &:disabled {
      background-color: ${({ theme }) =>
        theme.iconButton._active._disabled.bgColor};
      border-color: ${({ theme }) => theme.iconButton._disabled.fill};
      fill: ${({ theme }) => theme.iconButton._active._disabled.fill};
      pointer-events: none;
    }
  }
`;
