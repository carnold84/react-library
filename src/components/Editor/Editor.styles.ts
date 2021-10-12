import styled from 'styled-components';
import Box from '../Box';

export const Wrapper = styled(Box)`
  border: 1px solid ${({ theme }) => theme.editor.borderColor};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MenuBar = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.editor.menuBar.borderColor};
  fill: ${({ theme }) => theme.editor.menuBar.fill};
  padding: 10px;
`;

export const Content = styled(Box)`
  color: ${({ theme }) => theme.editor.content.color};
  flex-grow: 1;

  .ProseMirror {
    font-size: 1.3rem;
    height: 100%;
    padding: 5px 20px;

    &:hover,
    &:focus {
      outline: none;
    }
  }
`;
