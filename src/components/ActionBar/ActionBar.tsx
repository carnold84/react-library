import React from 'react';
import { Wrapper } from './ActionBar.styles';

type Props = {
  children: React.ReactNode;
  [x: string]: any;
};

/**
 * Primary UI component for user interaction
 */
const ActionBar = ({ children, ...rest }: Props) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default ActionBar;
