import styled from 'styled-components';

type ButtonProps = {
  disabled: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 15px 0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.background.disabled.main
      : theme.colors.background.secondary.main};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 48px;
  text-transform: uppercase;
  transform: scale(1);
  transition: background-color 0.2s, transform 0.1s;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.99);
  }

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      `
        cursor: pointer;
        background-color: ${theme.colors.background.secondary.hover};
      `}
  }
`;

export const PageStateContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.heading.large};
  background-color: ${({ theme }) => theme.colors.background.tertiary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ isFocused, theme }) =>
      !isFocused && theme.colors.background.tertiary.hover};
  }
`;

export const Input = styled.input<{ isFocused: boolean }>`
  height: 100%;
  text-align: center;
  overflow: hidden;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.heading.large};
  border: none;
  cursor: ${({ isFocused }) => (isFocused ? 'text' : 'pointer')};

  &:focus {
    outline: none;
  }

  &::selection {
    background-color: ${({ theme }) => theme.colors.background.secondary.main};
  }
`;
