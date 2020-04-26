import React from 'react';
import { ButtonStyled } from './ButtonStyled';

type HTMLButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  size?: 'large' | 'regular' | 'small';
  fullWidth?: boolean;
} & HTMLButton;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

Button.defaultProps = {
  color: 'primary',
  size: 'regular',
  fullWidth: false,
};
