import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ToggleThemeContainer } from './ToggleThemeStyled';
import { Toggle } from '../Toggle';
import { useModeToggle, useModeState } from '../../contexts';

export const ToggleTheme: React.FC = () => {
  const toggleMode = useModeToggle();
  const { lightMode } = useModeState();
  return (
    <ToggleThemeContainer>
      <Toggle
        isChecked={lightMode}
        leftIcon={faMoon}
        rightIcon={faSun}
        handleToggle={toggleMode}
      />
    </ToggleThemeContainer>
  );
};
