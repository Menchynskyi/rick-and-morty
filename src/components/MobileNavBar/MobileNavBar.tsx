import React from 'react';
import { useLocation } from 'react-router-dom';
import { MobileOnly } from '../../media';
import {
  AsideStyled,
  NavList,
  NavListItem,
  LinkStyled,
} from './MobileNavBarStyled';
import { Route } from '../../types';
import { scrollTo } from '../../utils';
import { useLockBodyScroll } from '../../hooks';

export type MobileNavBarProps = {
  isOpen: boolean;
  routes: Route[];
  handleToggleBar: () => void;
};

export const MobileNavBar: React.FC<MobileNavBarProps> = ({
  isOpen,
  routes,
  children,
  handleToggleBar,
}) => {
  const { pathname } = useLocation();
  const handleNavigation = () => {
    handleToggleBar();
    scrollTo(0, 0, 'auto');
  };
  useLockBodyScroll();

  return (
    <MobileOnly>
      <AsideStyled isOpen={isOpen}>
        {children}
        <nav>
          <NavList>
            {routes.map(({ name, path }) => (
              <NavListItem
                onClick={handleNavigation}
                isActive={pathname.startsWith(path)}
                key={name}
              >
                <LinkStyled to={path}>{name}</LinkStyled>
              </NavListItem>
            ))}
          </NavList>
        </nav>
      </AsideStyled>
    </MobileOnly>
  );
};
