import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ToggleThemeContainer } from './ToggleThemeStyled';
import { Toggle } from '../Toggle';
import { useModeToggle } from '../../contexts';

export const ToggleTheme: React.FC = () => {
  const toggleMode = useModeToggle();
  return (
    <ToggleThemeContainer>
      <Toggle leftIcon={faMoon} rightIcon={faSun} handleToggle={toggleMode} />
    </ToggleThemeContainer>
  );
};
