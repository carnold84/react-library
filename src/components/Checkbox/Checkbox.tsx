import React from 'react';
import { Wrapper } from './Checkbox.styles';

export type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  isPrimary?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  [x: string]: any;
};

/**
 * Primary UI component for user interaction
 */
const Checkbox = ({
  children,
  isDisabled = false,
  isPrimary = false,
  onClick,
  ...rest
}: Props) => {
  const classes = [];

  if (isPrimary) {
    classes.push('is_primary');
  }

  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Checkbox;
