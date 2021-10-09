import React from 'react';
import {
  CheckedIcon,
  Icon,
  Input,
  Label,
  Text,
  UncheckedIcon,
  Wrapper,
} from './Checkbox.styles';

export type CheckboxProps = {
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
  id,
  isDisabled = false,
  label,
  name,
  onChange,
  value,
  ...rest
}: CheckboxProps) => {
  return (
    <Wrapper className={isDisabled ? 'is_disabled' : ''} {...rest}>
      <Input
        checked={value}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        id={id}
        name={name}
        onChange={(evt) => onChange(evt)}
        type={'checkbox'}
      />
      <Label htmlFor={id}>
        <Icon>
          <CheckedIcon aria-hidden={true} focusable={false} />
          <UncheckedIcon
            aria-hidden={true}
            className={'unchecked'}
            focusable={false}
          />
        </Icon>
        <Text>{label}</Text>
      </Label>
    </Wrapper>
  );
};

export default Checkbox;
