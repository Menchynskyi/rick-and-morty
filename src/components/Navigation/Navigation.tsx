import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  LinkStyled,
  NavList,
  NavListItem,
  NavStyled,
} from './NavigationStyled';

const routes = [
  { name: 'Characters', path: '/characters' },
  { name: 'Episodes', path: '/episodes' },
  { name: 'Locations', path: '/locations' },
];

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <NavStyled>
      <NavList>
        {routes.map(({ name, path }) => (
          <NavListItem active={pathname.startsWith(path)} key={name}>
            <LinkStyled to={path}>{name}</LinkStyled>
          </NavListItem>
        ))}
      </NavList>
    </NavStyled>
  );
};
