import React, { ReactNode } from 'react';
import { Wrapper } from './Typography.styles';

export type Props = {
  children?: ReactNode;
  component?: any;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  [x: string]: any;
};

/**
 * Component for all typography in application
 */
const Typography = ({
  children,
  className,
  component = 'p',
  variant = 'p',
  ...rest
}: Props) => {
  return (
    <Wrapper as={component} className={`is_${variant} ${className}`} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Typography;
