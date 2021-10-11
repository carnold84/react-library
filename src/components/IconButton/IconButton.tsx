import React from 'react';
import { Wrapper } from './IconButton.styles';

export type IconButtonProps = {
  children: React.ReactNode;
  component?: any;
  isDisabled?: boolean;
  isPrimary?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  [x: string]: any;
};

/**
 * Plain Button designed for icons
 */
const IconButton = ({
  children,
  component = 'button',
  isDisabled = false,
  isPrimary = false,
  onClick,
  ...rest
}: IconButtonProps) => {
  return (
    <Wrapper
      forwardedAs={component}
      isDisabled={isDisabled}
      isPrimary={isPrimary}
      onClick={onClick}
      {...rest}>
      {children}
    </Wrapper>
  );
};

export default IconButton;
