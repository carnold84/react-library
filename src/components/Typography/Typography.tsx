import React, { ReactNode } from 'react';
import { Wrapper } from './Typography.styles';

export type Props = {
  children?: ReactNode;
  component?: any;
  variant?: string;
  [x: string]: any;
};

/**
 * Component for all typography in application
 */
const Typography = ({
  children,
  component = 'p',
  variant = 'p',
  ...rest
}: Props) => {
  return (
    <Wrapper as={component} className={`is_${variant}`} {...rest}>
      {children}
    </Wrapper>
  );
};

export default Typography;
