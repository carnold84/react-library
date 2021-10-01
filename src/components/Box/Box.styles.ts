import styled from 'styled-components';

export const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.button.bgColor};
  border: 1px solid ${({ theme }) => theme.button.borderColor};
  border-radius: 3em;
  color: ${({ theme }) => theme.button.color};
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.button.fontFamily};
  font-size: ${({ theme }) => theme.button.fontSize};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  padding: 11px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.button._hover.bgColor};
    border-color: ${({ theme }) => theme.button._hover.borderColor};
    color: ${({ theme }) => theme.button._hover.color};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.button._disabled.bgColor};
    border-color: ${({ theme }) => theme.button._disabled.borderColor};
    color: ${({ theme }) => theme.button._disabled.color};
    pointer-events: none;
  }

  &.is_primary {
    background-color: ${({ theme }) => theme.button._primary.bgColor};
    border-color: ${({ theme }) => theme.button._primary.borderColor};
    color: ${({ theme }) => theme.button._primary.color};

    &:hover {
      background-color: ${({ theme }) => theme.button._primary._hover.bgColor};
      border-color: ${({ theme }) => theme.button._primary._hover.borderColor};
      color: ${({ theme }) => theme.button._primary._hover.color};
    }

    &:disabled {
      background-color: ${({ theme }) =>
        theme.button._primary._disabled.bgColor};
      border-color: ${({ theme }) =>
        theme.button._primary._disabled.borderColor};
      color: ${({ theme }) => theme.button._primary._disabled.color};
      pointer-events: none;
    }
  }
`;
