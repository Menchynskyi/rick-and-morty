import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileHeaderStyled, BarsButton } from './MobileHeaderStyled';
import { ToggleTheme } from '../ToggleTheme';
import { useModeState } from '../../contexts';

type MobileHeaderProps = {
  handleToggleBar: () => void;
};

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  handleToggleBar: handleOpenBar,
}) => {
  const { lightMode } = useModeState();

  return (
    <MobileHeaderStyled>
      <ToggleTheme lightMode={lightMode} />
      <BarsButton type="button" onClick={handleOpenBar}>
        <FontAwesomeIcon icon={faBars} />
      </BarsButton>
    </MobileHeaderStyled>
  );
};
