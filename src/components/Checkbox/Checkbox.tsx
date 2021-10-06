import React, { useEffect, useState } from 'react';
import {
  CheckedIcon,
  Icon,
  Input,
  Label,
  UncheckedIcon,
  Wrapper,
} from './Checkbox.styles';

export type CheckboxProps = {
  children: React.ReactNode;
  id: string;
  isDisabled?: boolean;
  label?: string;
  name?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: boolean;
  [x: string]: any;
};

/**
 * Controlled component for selecting one or more choices.
 */
const Checkbox = ({
  children,
  id,
  isDisabled = false,
  label,
  name,
  onChange,
  value,
  ...rest
}: CheckboxProps) => {
  return (
    <Wrapper {...rest}>
      <Input
        checked={value}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={(evt) => onChange(evt)}
        type={'checkbox'}
      />
      <Label htmlFor={id}>
        <Icon>
          <CheckedIcon aria-hidden={true} focusable="false" />
          <UncheckedIcon
            aria-hidden={true}
            className={'unchecked'}
            focusable="false"
          />
        </Icon>
        {label}
      </Label>
    </Wrapper>
  );
};

export default Checkbox;
