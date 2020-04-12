import styled from 'styled-components';

type ButtonProps = {
  disabled: boolean;
};

export const PageSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 1260px;
  margin: 20px auto;
  padding: 0 7.5px;
`;

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
      ? theme.colors.background.disabled
      : theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 48px;
  text-transform: uppercase;
  transition: opacity 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      `
        cursor: pointer;
        opacity: ${theme.hoverOpacity};
      `}
  }
`;

export const PageStateContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.heading.large};
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity 0.2s;

  &:hover {
    opacity: ${({ isFocused, theme }) => !isFocused && theme.hoverOpacity};
  }
`;

export const Input = styled.input<{ isFocused: boolean }>`
  height: 100%;
  text-align: center;
  overflow: hidden;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.heading.large};
  border: none;
  cursor: ${({ isFocused }) => (isFocused ? 'text' : 'pointer')};

  &:focus {
    outline: none;
  }

  &::selection {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;
