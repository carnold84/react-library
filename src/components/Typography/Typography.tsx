import React, { ReactNode } from 'react';
import { Wrapper } from './Typography.styles';

export type Props = {
  children?: ReactNode;
  component?: any;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  weight?: 'normal' | 'bold';
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
  weight = 'normal',
  ...rest
}: Props) => {
  const classes = [`is_${variant}`, `is_${weight}`];

  if (className) {
    classes.push(className);
  }

  return (
    <Wrapper
      className={classes.join(' ')}
      forwardedAs={component}
      m={0}
      mb={3}
      {...rest}>
      {children}
    </Wrapper>
  );
};

export default Typography;
