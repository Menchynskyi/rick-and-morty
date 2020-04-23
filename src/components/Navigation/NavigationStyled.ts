import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyled = styled.nav`
  width: 1260px;
  margin: 0 auto;
  padding: 0 7.5px;
`;

export const NavList = styled.ul`
  display: flex;
  padding: 0;
`;

export const NavListItem = styled.li<{ active: boolean }>`
  position: relative;
  padding: 20px 10px;
  border-bottom: ${({ active, theme }) =>
    active && `2px solid ${theme.colors.background.secondary.main}`};
  font-size: ${({ theme }) => theme.fontSize.text.large};
  list-style: none;
`;

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  transition: all 0.2s;

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
    color: ${({ theme }) => theme.colors.background.secondary.transparent};
  }
`;
