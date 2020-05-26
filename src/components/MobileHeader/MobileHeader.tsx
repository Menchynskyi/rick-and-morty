import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileHeaderStyled, BarsButton } from './MobileHeaderStyled';
import { ToggleTheme } from '../ToggleTheme';
import { useModeState } from '../../contexts';

type MobileHeaderProps = {
  handleToggleBar: () => void;
  icon: any //eslint-disable-line
};

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  handleToggleBar,
  icon,
}) => {
  const { lightMode } = useModeState();

  return (
    <MobileHeaderStyled>
      <ToggleTheme lightMode={lightMode} />
      <BarsButton type="button" onClick={handleToggleBar}>
        <FontAwesomeIcon icon={icon} />
      </BarsButton>
    </MobileHeaderStyled>
  );
};
