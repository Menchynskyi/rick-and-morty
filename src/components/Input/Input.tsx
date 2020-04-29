import React from 'react';
import { InputStyled } from './InputStyled';
import { useModeState } from '../../contexts';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'regular' | 'large';
  fullWidth?: boolean;
  filled?: boolean;
}

export const Input: React.FC<InputProps> = ({ filled, ...rest }) => {
  const { lightMode } = useModeState();
  return <InputStyled filled={filled || lightMode} {...rest} />;
};

Input.defaultProps = {
  color: 'primary',
  size: 'regular',
  fullWidth: false,
};
