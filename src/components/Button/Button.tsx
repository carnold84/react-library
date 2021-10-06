import React from 'react';
import { Wrapper } from './Button.styles';

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
const Button = ({
  children,
  className,
  isDisabled = false,
  isPrimary = false,
  onClick,
  ...rest
}: Props) => {
  const classes = [];

  if (isPrimary) {
    classes.push('is_primary');
  }

  return (
    <Wrapper
      as={'button'}
      className={`${classes.join(' ')}${className}`}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}>
      {children}
    </Wrapper>
  );
};

export default Button;
