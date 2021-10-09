import styled from 'styled-components';
import Typography from '../Typography';

export const Wrapper = styled(Typography)`
  color: ${({ theme }) => theme.listItemText.color};
  margin: 0;
  text-decoration: none;

  &.is_secondary {
    color: ${({ theme }) => theme.listItemText._secondary.color};
    font-size: 1.3rem;
    margin: 1px 0 0;
  }
`;
