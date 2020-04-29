import React from 'react';
import { ButtonStyled } from './ButtonStyled';
import { useModeState } from '../../contexts';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  size?: 'extraSmall' | 'small' | 'regular' | 'large';
  fullWidth?: boolean;
  filled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  filled,
  ...rest
}) => {
  const { lightMode } = useModeState();
  return (
    <ButtonStyled filled={filled || lightMode} {...rest}>
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  color: 'primary',
  size: 'regular',
  fullWidth: false,
};
