import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ToggleThemeContainer } from './ToggleThemeStyled';
import { Toggle } from '../Toggle';

type ToggleTheme = {
  toggleTheme: () => void;
};

export const ToggleTheme: React.FC<ToggleTheme> = ({ toggleTheme }) => {
  return (
    <ToggleThemeContainer>
      <Toggle leftIcon={faMoon} rightIcon={faSun} handleToggle={toggleTheme} />
    </ToggleThemeContainer>
  );
};
