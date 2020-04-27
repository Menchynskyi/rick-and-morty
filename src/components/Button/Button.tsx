import React from 'react';
import { ButtonStyled } from './ButtonStyled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  size?: 'extraSmall' | 'small' | 'regular' | 'large';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

Button.defaultProps = {
  color: 'primary',
  size: 'regular',
  fullWidth: false,
};
