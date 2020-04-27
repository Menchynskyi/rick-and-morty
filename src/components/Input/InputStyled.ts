import styled, { ThemedStyledProps, DefaultTheme } from 'styled-components';
import { InputProps } from './Input';

type StyledComponentsProps = ThemedStyledProps<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  DefaultTheme
>;

type InputStyledProps = StyledComponentsProps & InputProps;

const setBorderColor = ({ theme, color }: InputStyledProps) => {
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

const setPadding = ({ size }: InputProps) => {
  switch (size) {
    case 'small': {
      return '10px 12px';
    }
    case 'regular': {
      return '12px 12px';
    }
    case 'large': {
      return '14px 12px';
    }
    default: {
      return '10px 12px';
    }
  }
};

// eslint-disable-next-line
export const InputStyled = styled.input<any>`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  padding: ${setPadding};
  background-color: inherit;
  border: 1px solid ${setBorderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
