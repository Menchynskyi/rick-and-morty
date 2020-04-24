import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  LinkStyled,
  NavList,
  NavListItem,
  NavStyled,
  GithubLink,
} from './NavigationStyled';
import { Toggle } from '../Toggle';

const routes = [
  { name: 'Characters', path: '/characters' },
  { name: 'Episodes', path: '/episodes' },
  { name: 'Locations', path: '/locations' },
];

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <NavStyled isFull={!routes.every(({ path }) => path !== pathname)}>
      <NavList>
        {routes.map(({ name, path }) => (
          <NavListItem active={pathname.startsWith(path)} key={name}>
            <LinkStyled to={path}>{name}</LinkStyled>
          </NavListItem>
        ))}
      </NavList>
      <Toggle />
      <GithubLink href="https://github.com/Menchynskyi/rick-and-morty">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </GithubLink>
    </NavStyled>
  );
};
