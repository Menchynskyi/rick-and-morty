import React from 'react';
import { InputStyled } from './InputStyled';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'regular' | 'large';
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  return <InputStyled {...props} />;
};

Input.defaultProps = {
  color: 'primary',
  size: 'regular',
  fullWidth: false,
};
