import styled from 'styled-components';
import { ButtonProps } from './Button';

const setPadding = ({ size }: ButtonProps) => {
  switch (size) {
    case 'extraSmall': {
      return '10px';
    }
    case 'small': {
      return '12px';
    }
    case 'regular': {
      return '15px';
    }
    case 'large': {
      return '25px';
    }
    default: {
      return '15px';
    }
  }
};

export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  padding: ${setPadding};
  border: 1px solid
    ${({ theme, color }) => {
      switch (color) {
        case 'primary': {
          return theme.colors.background.secondary.main;
        }
        case 'secondary': {
          return theme.colors.background.tertiary.main;
        }
        default: {
          return theme.colors.background.secondary.main;
        }
      }
    }};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.background.disabled.main : 'inherit'};
  color: ${({ theme, color }) => {
    switch (color) {
      case 'primary': {
        return theme.colors.background.secondary.main;
      }
      case 'secondary': {
        return theme.colors.background.tertiary.main;
      }
      default: {
        return theme.colors.background.secondary.main;
      }
    }
  }};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'large': {
        return theme.fontSize.text.large;
      }
      case 'regular':
      case 'small':
      case 'extraSmall': {
        return theme.fontSize.text.regular;
      }
      default: {
        return theme.fontSize.text.regular;
      }
    }
  }};
  text-transform: capitalize;
  transition: background-color 0.2s, color 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
    color: ${({ theme }) => theme.colors.background.white.main};
    background-color: ${({ theme, color }) => {
      switch (color) {
        case 'primary': {
          return theme.colors.background.secondary.main;
        }
        case 'secondary': {
          return theme.colors.background.tertiary.main;
        }
        default: {
          return theme.colors.background.secondary.main;
        }
      }
    }};
  }
`;
