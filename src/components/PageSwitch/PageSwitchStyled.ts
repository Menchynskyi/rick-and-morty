import styled from 'styled-components';

type ButtonProps = {
  disabled: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 15px 0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.background.disabled.main
      : theme.colors.background.secondary.main};
  color: ${({ theme }) => theme.colors.background.white.main};
  font-size: ${({ theme }) => theme.fontSize.heading.regular};
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

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 5px 0;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.heading.extraLarge};
  }

  @media ${({ theme }) => theme.device.laptop} {
    font-size: 44px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 300px;
    font-size: 48px;
  }
`;

export const PageStateContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  color: ${({ theme }) => theme.colors.background.white.main};
  background-color: ${({ theme }) => theme.colors.background.tertiary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ isFocused, theme }) =>
      !isFocused && theme.colors.background.tertiary.hover};
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 30%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 300px;
  }
`;

export const Input = styled.input<{ isFocused: boolean }>`
  height: 100%;
  text-align: center;
  overflow: hidden;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.background.white.main};
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  border: none;
  cursor: ${({ isFocused }) => (isFocused ? 'text' : 'pointer')};

  &:focus {
    outline: none;
  }

  &::selection {
    background-color: ${({ theme }) => theme.colors.background.secondary.main};
  }

  @media ${({ theme }) => theme.device.mobileS} {
    font-size: 26px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.heading.regular};
  }

  @media ${({ theme }) => theme.device.desktop} {
    font-size: ${({ theme }) => theme.fontSize.heading.large};
  }
`;
