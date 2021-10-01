import styled from 'styled-components';
import Box from '../Box';

export const Wrapper = styled(Box).attrs({
  as: 'header',
})`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.header.borderColor};
  display: flex;
  height: 50px;
  justify-content: space-between;
`;
