import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { MobileHeaderStyled, BarsButton } from './MobileHeaderStyled';
import { ToggleTheme } from '../ToggleTheme';
import { useModeState } from '../../contexts';

type MobileHeaderProps = {
  handleToggleBar: () => void;
  icon: IconDefinition;
  mobileBarIsOpen: boolean;
};

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  handleToggleBar,
  icon,
  mobileBarIsOpen,
}) => {
  const { lightMode } = useModeState();

  return (
    <MobileHeaderStyled mobileBarIsOpen={mobileBarIsOpen}>
      <ToggleTheme lightMode={lightMode} />
      <BarsButton type="button" onClick={handleToggleBar}>
        <FontAwesomeIcon icon={icon} />
      </BarsButton>
    </MobileHeaderStyled>
  );
};
