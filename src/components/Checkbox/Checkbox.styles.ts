import styled from 'styled-components';
import { Checkbox, CheckboxChecked } from '../../icons';
import Box from '../Box';
import Typography from '../Typography';

const size = '26px';

// extend box so we can use styled stystem spacing, sizes etc
export const Wrapper = styled(Box)`
  display: inline-flex;
  fill: ${({ theme }) => theme.button.color};
  position: relative;

  &[disabled],
  &[aria-disabled='true'] {
    opacity: 0.4;
  }
`;

export const Label = styled(Typography).attrs({
  component: 'label',
})`
  align-items: center;
  display: flex;
  margin: 0;
`;

export const Input = styled.input`
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;

  &:disabled + ${Label} {
    opacity: 0.5;
  }
`;

export const Icon = styled.div`
  height: ${size};
  position: relative;
  width: ${size};

  ${Input}:disabled + ${Label} {
    opacity: 0;
  }
`;

export const UncheckedIcon = styled(Checkbox)`
  height: ${size};
  left: 0;
  opacity: 1;
  padding: 0;
  position: absolute;
  top: 0;
  transition: opacity 300ms ease;
  width: ${size};

  ${Input}:checked + ${Label} & {
    opacity: 0;
  }
`;

export const CheckedIcon = styled(CheckboxChecked)`
  height: ${size};
  left: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 0;
  transition: opacity 300ms ease;
  width: ${size};

  ${Input}:checked + ${Label} & {
    opacity: 1;
  }
`;
