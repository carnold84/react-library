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
  color: ${({ theme }) => theme.iconButton.fill};
  fill: ${({ theme }) => theme.iconButton.fill};
  justify-content: center;
  padding: 4px;

  &:hover {
    color: ${({ theme }) => theme.iconButton._hover.fill};
    fill: ${({ theme }) => theme.iconButton._hover.fill};
  }

  &:focus {
    color: ${({ theme }) => theme.iconButton._focus.fill};
    fill: ${({ theme }) => theme.iconButton._focus.fill};
    outline: ${({ theme }) => theme.iconButton._focus.outline};
  }

  &:disabled {
    color: ${({ theme }) => theme.iconButton._disabled.fill};
    fill: ${({ theme }) => theme.iconButton._disabled.fill};
    pointer-events: none;
  }

  &.is_primary {
    color: ${({ theme }) => theme.iconButton._primary.fill};
    fill: ${({ theme }) => theme.iconButton._primary.fill};

    &:hover {
      color: ${({ theme }) => theme.iconButton._primary._hover.fill};
      fill: ${({ theme }) => theme.iconButton._primary._hover.fill};
    }

    &:disabled {
      color: ${({ theme }) => theme.iconButton._primary._disabled.fill};
      fill: ${({ theme }) => theme.iconButton._primary._disabled.fill};
      pointer-events: none;
    }

    &:focus {
      color: ${({ theme }) => theme.iconButton._primary._focus.fill};
      fill: ${({ theme }) => theme.iconButton._primary._focus.fill};
      outline: ${({ theme }) => theme.iconButton._primary._focus.outline};
    }
  }

  &.is_active {
    background-color: ${({ theme }) => theme.iconButton._active.bgColor};
    border-color: ${({ theme }) => theme.iconButton._active.bgColor};
    color: ${({ theme }) => theme.iconButton._active.fill};
    fill: ${({ theme }) => theme.iconButton._active.fill};

    &:hover {
      background-color: ${({ theme }) =>
        theme.iconButton._active._hover.bgColor};
      border-color: ${({ theme }) => theme.iconButton._hover.fill};
      color: ${({ theme }) => theme.iconButton._active._hover.fill};
      fill: ${({ theme }) => theme.iconButton._active._hover.fill};
    }

    &:disabled {
      background-color: ${({ theme }) =>
        theme.iconButton._active._disabled.bgColor};
      border-color: ${({ theme }) => theme.iconButton._disabled.fill};
      color: ${({ theme }) => theme.iconButton._active._disabled.fill};
      fill: ${({ theme }) => theme.iconButton._active._disabled.fill};
      pointer-events: none;
    }

    &:focus {
      color: ${({ theme }) => theme.iconButton._active._focus.fill};
      fill: ${({ theme }) => theme.iconButton._active._focus.fill};
      outline: ${({ theme }) => theme.iconButton._active._focus.outline};
    }
  }
`;
