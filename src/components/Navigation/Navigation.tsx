import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  LinkStyled,
  NavList,
  NavListItem,
  NavStyled,
} from './NavigationStyled';
import { ToggleTheme } from '../ToggleTheme';
import { scrollTo } from '../../utils';
import { MobileOnly, DesktopOnly } from '../../media';
import { useModeState } from '../../contexts';
import { MobileNavBar } from '../MobileNavBar';
import { Route } from '../../types';
import { MobileHeader } from '../MobileHeader';

const routes: Route[] = [
  { name: 'Characters', path: '/characters' },
  { name: 'Episodes', path: '/episodes' },
  { name: 'Locations', path: '/locations' },
];

export const Navigation: React.FC = () => {
  const [mobileBarIsOpen, setMobileBarIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { lightMode } = useModeState();

  const handleClickNavigation = useCallback(() => {
    scrollTo(0, 0, 'smooth');
  }, []);

  const handleToggleBar = () => {
    setMobileBarIsOpen((prev) => !prev);
  };

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
        <MobileHeader handleToggleBar={handleToggleBar} />
        <MobileNavBar
          handleToggleBar={handleToggleBar}
          routes={routes}
          isOpen={mobileBarIsOpen}
        >
          <MobileHeader handleToggleBar={handleToggleBar} />
        </MobileNavBar>
      </MobileOnly>
    </>
  );
};
