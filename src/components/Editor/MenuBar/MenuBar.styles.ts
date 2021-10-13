import styled from 'styled-components';
import Box from '../../Box';

export const Wrapper = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.editor.menuBar.borderColor};
  fill: ${({ theme }) => theme.editor.menuBar.fill};
  padding: 10px;
`;
