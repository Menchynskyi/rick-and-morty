import styled from 'styled-components';

type ToggleThumbProps = {
  isChecked: boolean;
  isTarget: boolean;
};

export const ToggleContainer = styled.div<{ isChecked: boolean }>`
  position: relative;
  width: 46px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.background.black.main};
  border-radius: 30px;
  line-height: 1;
  transition: all 0.4s ease;

  &:hover {
    cursor: pointer;
  }

  & svg {
    position: absolute;
    top: 4px;
    font-size: 14px;
    color: #f0ce39;
  }
`;

export const ToggleThumb = styled.div<ToggleThumbProps>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background.white.main};
  border-radius: 50%;
  box-sizing: border-box;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  transform: ${({ isChecked }) =>
    isChecked ? 'translateX(24px)' : 'translateX(0)'};
  box-shadow: ${({ theme, isTarget }) =>
    isTarget && `0px 0px 4px 2px ${theme.colors.background.secondary.main}`};

  &:active {
    box-shadow: 0px 0px 4px 4px
      ${({ theme }) => theme.colors.background.secondary.main};
  }
`;

export const InputStyled = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
