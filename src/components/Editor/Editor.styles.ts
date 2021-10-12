import styled from 'styled-components';
import Box from '../Box';

export const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.header.backgroundColor};
  border: 1px solid ${({ theme }) => theme.header.borderColor};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MenuBar = styled(Box)`
  background-color: ${({ theme }) => theme.header.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme.header.borderColor};
  padding: 10px;
`;

export const Content = styled(Box)`
  background-color: ${({ theme }) => theme.header.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme.header.borderColor};
  flex-grow: 1;

  .ProseMirror {
    font-size: 1.3rem;
    height: 100%;
    padding: 5px 20px;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.neutral.color100};
      outline: none;
    }
  }
`;
