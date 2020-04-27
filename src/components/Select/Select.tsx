import React from 'react';
import ReactSelect, { Props } from 'react-select';
import { SelectContainer } from './SelectStyled';

export interface SelectProps extends Props {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'regular' | 'large';
  fullWidth?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  color,
  size,
  fullWidth,
  ...rest
}) => {
  return (
    <SelectContainer color={color} size={size} fullWidth={fullWidth}>
      <ReactSelect
        {...rest}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectContainer>
  );
};
