import styled, { ThemedStyledProps, DefaultTheme } from 'styled-components';
import { SelectProps } from './Select';

type SelectStyledProps = ThemedStyledProps<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  DefaultTheme
> &
  SelectProps;

const setPlaceholderColor = ({ theme, color, filled }: SelectStyledProps) => {
  if (!filled) {
    return theme.colors.text.secondary;
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

const setBackgroundColor = ({ theme, color, filled }: SelectStyledProps) => {
  if (!filled) {
    return theme.colors.background.primary;
  }
  switch (color) {
    case 'primary': {
      return theme.colors.background.secondary.dark;
    }
    case 'secondary': {
      return theme.colors.background.tertiary.dark;
    }
    default: {
      return theme.colors.background.secondary.dark;
    }
  }
};

export const SelectContainer = styled.div<SelectProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
  height: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  color: ${({ theme }) => theme.colors.text.primary};

  .react-select-container {
    height: 100%;
  }
  .react-select__no--options--message {
    color: red;
  }

  .react-select__control {
    height: 100%;
    background-color: ${setBackgroundColor};
    border: 1px solid ${({ theme }) => theme.colors.background.secondary.main};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: text;
    transition: all 0.2s;

    &:focus {
      box-shadow: none;
    }
  }
  .react-select__control--is-focused {
    background-color: transparent;
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__indicator {
    color: ${setPlaceholderColor};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
  .react-select__menu {
    color: ${({ theme }) => theme.colors.background.white.main};
    background-color: ${({ theme }) => theme.colors.background.secondary.main};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 11px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.background.white.main};
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 3px solid ${({ theme }) => theme.colors.background.secondary.main};
    }
  }
  .react-select__option {
    &:first-of-type {
      border-top-left-radius: calc(${({ theme }) => theme.borderRadius} / 1.5);
      border-top-right-radius: calc(${({ theme }) => theme.borderRadius} / 1.5);
    }
    &:last-of-type {
      border-bottom-left-radius: calc(
        (${({ theme }) => theme.borderRadius} / 1.5)
      );
      border-bottom-right-radius: calc(
        (${({ theme }) => theme.borderRadius} / 1.5)
      );
    }
  }
  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.background.tertiary.main};
  }
  .react-select__option--is-focused {
    color: ${({ theme }) => theme.colors.background.secondary.main};
    background-color: ${({ theme }) => theme.colors.background.white.main};
  }
  .react-select__placeholder {
    color: ${setPlaceholderColor};
  }
  .react-select__input,
  .react-select__single-value {
    color: ${({ theme }) => theme.colors.text.primary};
    & input {
      margin-bottom: 0;
    }
  }
  .react-select__value-container {
    padding: 2px 12px;
    text-transform: capitalize;
  }
  .react-select__menu-notice--no-options {
    color: ${({ theme }) => theme.colors.background.white.main};
  }
`;
