import styled, { ThemedStyledProps, DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button';

type StyledComponentsProps = ThemedStyledProps<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  DefaultTheme
>;

type ButtonStyledProps = StyledComponentsProps & ButtonProps;

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

const setFontSize = ({ theme, size }: ButtonStyledProps) => {
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
};

const setBorderColor = ({ theme, color }: ButtonStyledProps) => {
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
};

const setColor = ({ theme, color, filled }: ButtonStyledProps) => {
  if (filled) {
    return theme.colors.background.white.main;
  }
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
};

const setBackgroundColor = ({
  theme,
  filled,
  disabled,
  color,
}: ButtonStyledProps) => {
  if (disabled) {
    return theme.colors.background.disabled.main;
  }
  if (filled) {
    switch (color) {
      case 'primary': {
        return theme.colors.background.secondary.main;
      }
      case 'secondary': {
        return theme.colors.background.tertiary.main;
      }
      default: {
        return 'inherit';
      }
    }
  }
  return 'inherit';
};

const setHoverBackgroundColor = ({
  theme,
  color,
  filled,
}: ButtonStyledProps) => {
  if (filled) {
    switch (color) {
      case 'primary': {
        return theme.colors.background.secondary.hover;
      }
      case 'secondary': {
        return theme.colors.background.tertiary.hover;
      }
      default: {
        return theme.colors.background.secondary.hover;
      }
    }
  }
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
};

export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  padding: ${setPadding};
  border: 1px solid ${setBorderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${setBackgroundColor};
  color: ${setColor};
  font-size: ${setFontSize};
  text-transform: capitalize;
  transition: background-color 0.2s, color 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    color: ${({ theme }) => theme.colors.background.white.main};
    background-color: ${setHoverBackgroundColor};
  }
`;
