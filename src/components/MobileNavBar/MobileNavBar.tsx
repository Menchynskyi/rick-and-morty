import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileOnly } from '../../media';
import {
  AsideStyled,
  NavList,
  NavListItem,
  LinkStyled,
} from './MobileNavBarStyled';
import { Route } from '../../types';
import { scrollTo } from '../../utils';

export type MobileNavBarProps = {
  isOpen: boolean;
  routes: Route[];
  handleToggleBar: () => void;
};

export const MobileNavBar: React.FC<MobileNavBarProps> = ({
  isOpen,
  routes,
  handleToggleBar,
}) => {
  const { pathname } = useLocation();
  const handleNavigation = () => {
    handleToggleBar();
    scrollTo(0, 0, 'auto');
  };

  return (
    <MobileOnly>
      <AsideStyled isOpen={isOpen}>
        <nav>
          <NavList>
            {routes.map(({ name, path, icon }) => (
              <NavListItem
                onClick={handleNavigation}
                isActive={pathname.startsWith(path)}
                key={name}
              >
                <LinkStyled to={path}>
                  <span>
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  <span>{name}</span>
                </LinkStyled>
              </NavListItem>
            ))}
          </NavList>
        </nav>
      </AsideStyled>
    </MobileOnly>
  );
};
