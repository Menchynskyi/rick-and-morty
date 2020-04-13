import React from 'react';
import { LogoContainer } from './LogoStyled';
import { ReactComponent as LogoIcon } from './logo.svg';

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoIcon />
    </LogoContainer>
  );
};
