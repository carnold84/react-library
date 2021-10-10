import React from 'react';
import { Wrapper } from './Button.styles';

export type ButtonProps = {
  children: React.ReactNode;
  component?: any;
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
  component = 'button',
  isDisabled = false,
  isPrimary = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const classes = [];

  if (isPrimary) {
    classes.push('is_primary');
  }

  if (className) {
    classes.push(className);
  }

  return (
    <Wrapper
      forwardedAs={component}
      className={`${classes.join(' ')}`}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}>
      {children}
    </Wrapper>
  );
};

export default Button;
