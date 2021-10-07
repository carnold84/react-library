import styled from 'styled-components';
import Typography from '../Typography';

export const Wrapper = styled(Typography)`
  color: ${({ theme }) => theme.listItemText.color};
  margin: 0;

  &.is_secondary {
    color: ${({ theme }) => theme.listItemText._secondary.color};
    font-size: 1.3rem;
    margin: 3px 0 0;
  }
`;
