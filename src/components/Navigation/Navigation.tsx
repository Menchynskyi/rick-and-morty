import React, { useCallback, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  faBars,
  faTimesCircle,
  faMask,
  faVideo,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';
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
  { name: 'Characters', path: '/characters', icon: faMask },
  { name: 'Episodes', path: '/episodes', icon: faVideo },
  { name: 'Locations', path: '/locations', icon: faCompass },
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

  const headerIcon = useMemo(() => (mobileBarIsOpen ? faTimesCircle : faBars), [
    mobileBarIsOpen,
  ]);

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
        <MobileHeader
          mobileBarIsOpen={mobileBarIsOpen}
          icon={headerIcon}
          handleToggleBar={handleToggleBar}
        />
        <MobileNavBar
          handleToggleBar={handleToggleBar}
          routes={routes}
          isOpen={mobileBarIsOpen}
        />
      </MobileOnly>
    </>
  );
};
