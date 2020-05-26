import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyled = styled.nav<{ isFull: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ isFull }) => (isFull ? '1260px' : '900px')};
  margin: 0 auto;
  padding: ${({ isFull }) => (isFull ? '0 7.5px' : '0')};
  transition: all 0.2s, width 0.3s ease-out, padding 0.3s ease-out;
`;

export const NavList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const NavListItem = styled.li<{ active: boolean }>`
  position: relative;
  padding: 20px 10px;
  border-bottom: ${({ active, theme }) =>
    active && `3px solid ${theme.colors.background.secondary.main}`};
  color: ${({ theme, active }) =>
    active ? theme.colors.text.primary : theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.medium};
  list-style: none;
`;

export const LinkStyled = styled(Link)`
  color: inherit;
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
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.text.small};
  color: ${({ theme }) => theme.colors.text.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.background.secondary.main};
  }
`;
