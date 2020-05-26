import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ToggleThemeContainer } from './ToggleThemeStyled';
import { Toggle } from '../Toggle';
import { useModeToggle } from '../../contexts';

type ToggleThemeProps = {
  lightMode: boolean;
};

export const ToggleTheme: React.FC<ToggleThemeProps> = ({ lightMode }) => {
  const toggleMode = useModeToggle();
  console.log(lightMode);
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
