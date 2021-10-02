import React from 'react';
import { Wrapper } from './Header.styles';

type Props = {
  children: React.ReactNode;
  [x: string]: any;
};

/**
 * Primary UI component for user interaction
 */
const Header = ({ children, ...props }: Props) => {
  return (
    <Wrapper as={'header'} {...props}>
      {children}
    </Wrapper>
  );
};

export default Header;
