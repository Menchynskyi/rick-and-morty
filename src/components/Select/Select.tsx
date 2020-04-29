import React from 'react';
import ReactSelect, { Props } from 'react-select';
import { SelectContainer } from './SelectStyled';
import { useModeState } from '../../contexts';

export interface SelectProps extends Props {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'regular' | 'large';
  fullWidth?: boolean;
  filled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  color,
  size,
  fullWidth,
  filled,
  ...rest
}) => {
  const { lightMode } = useModeState();
  return (
    <SelectContainer
      filled={filled || lightMode}
      color={color}
      size={size}
      fullWidth={fullWidth}
    >
      <ReactSelect
        {...rest}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectContainer>
  );
};
