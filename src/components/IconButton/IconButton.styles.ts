import styled from 'styled-components';
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
    color: ${({ theme }) => theme.iconButton._disabled.color};
    fill: ${({ theme }) => theme.iconButton._disabled.color};
    pointer-events: none;
  }

  &.is_primary {
    background-color: transparent;
    color: ${({ theme }) => theme.iconButton._primary.color};
    fill: ${({ theme }) => theme.iconButton._primary.color};

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.iconButton._primary._hover.color};
      fill: ${({ theme }) => theme.iconButton._primary._hover.color};
    }

    &:disabled {
      background-color: transparent;
      color: ${({ theme }) => theme.iconButton._primary._disabled.color};
      fill: ${({ theme }) => theme.iconButton._primary._disabled.color};
      pointer-events: none;
    }
  }
`;
