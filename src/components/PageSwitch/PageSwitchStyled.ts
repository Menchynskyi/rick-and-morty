import styled, { css } from 'styled-components';

type ButtonProps = {
  fullWidth: boolean;
};

const buttonStyle = css`
  display: flex;
  width: 50%;
  padding: 0 90px;
  border: none;
  background-color: rgba(0, 224, 231, 0.5);
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.text.extraLarge};
  text-transform: uppercase;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 224, 231, 0.4);
  }
`;

const nextButton = css`
  justify-content: flex-end;
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
`;

const nextButtonFullWidth = css`
  justify-content: center;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const prevButton = css`
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
`;

const prevButtonFullWidth = css`
  justify-content: center;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const PageSwitchContainer = styled.div`
  display: flex;
  height: 100px;
  max-width: 1260px;
  margin: 20px auto;
  padding: 0 7.5px;
`;

export const PrevButton = styled.button<ButtonProps>`
  ${buttonStyle}
  ${({ fullWidth }) => (fullWidth ? prevButtonFullWidth : prevButton)};
`;

export const NextButton = styled.button<ButtonProps>`
  ${buttonStyle};
  ${({ fullWidth }) => (fullWidth ? nextButtonFullWidth : nextButton)};
`;
