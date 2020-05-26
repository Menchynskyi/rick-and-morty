import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  LinkStyled,
  NavList,
  NavListItem,
  NavStyled,
  MobileNav,
  BarsButton,
} from './NavigationStyled';
import { ToggleTheme } from '../ToggleTheme';
import { scrollTo } from '../../utils';
import { MobileOnly, DesktopOnly } from '../../media';
import { useModeState } from '../../contexts';

const routes = [
  { name: 'Characters', path: '/characters' },
  { name: 'Episodes', path: '/episodes' },
  { name: 'Locations', path: '/locations' },
];

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const { lightMode } = useModeState();
  const handleClickNavigation = useCallback(() => {
    scrollTo(0, 0, 'smooth');
  }, []);

  return (
    <>
      <DesktopOnly>
        <NavStyled isFull={!routes.every(({ path }) => path !== pathname)}>
          <NavList>
            {routes.map(({ name, path }) => (
              <NavListItem
                onClick={handleClickNavigation}
                active={pathname.startsWith(path)}
                key={name}
              >
                <LinkStyled to={path}>{name}</LinkStyled>
              </NavListItem>
            ))}
          </NavList>
          <ToggleTheme lightMode={lightMode} />
        </NavStyled>
      </DesktopOnly>
      <MobileOnly>
        <MobileNav>
          <ToggleTheme lightMode={lightMode} />
          <BarsButton>
            <FontAwesomeIcon icon={faBars} />
          </BarsButton>
        </MobileNav>
      </MobileOnly>
    </>
  );
};
