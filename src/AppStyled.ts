import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const selection = css`
  & ::selection {
    background-color: ${({ theme }) => theme.colors.background.secondary.dark};
    color: ${({ theme }) => theme.colors.background.tertiary.main};
    text-shadow: none;
  }
  & ::-moz-selection {
    background-color: ${({ theme }) => theme.colors.background.secondary.dark};
    color: ${({ theme }) => theme.colors.background.tertiary.main};
    text-shadow: none;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background.gray.dark};
  transition: background-color 0.2s, color 0.2s;

  ${selection}
`;

export const MainContainer = styled.main`
  margin-top: 65px;
  padding-top: 5px;
  transition: background-color 0.2s, color 0.2s;

  ${selection}
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
