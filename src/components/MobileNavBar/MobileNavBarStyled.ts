import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MobileNavBarStyledProps = {
  isOpen: boolean;
};

type NavListItemProps = {
  isActive: boolean;
};

export const AsideStyled = styled.aside<MobileNavBarStyledProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  height: 100%;
  width: 100%;
  z-index: 2;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.gray.main};
  font-size: ${({ theme }) => theme.fontSize.text.large};
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  border-top: ${({ theme }) =>
    `1px solid ${theme.colors.background.disabled.main}`};
`;

export const NavListItem = styled.li<NavListItemProps>`
  position: relative;
  display: flex;
  margin: 0;
  padding: 20px;
  list-style: none;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.colors.background.disabled.main}`};
  background-color: ${({ isActive, theme }) =>
    isActive && theme.colors.background.secondary.dark};

  & svg {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: '';
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
