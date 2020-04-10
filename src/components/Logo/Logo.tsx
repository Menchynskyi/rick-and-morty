import React from 'react';
import { LogoContainer } from './LogoStyled';
import { ReactComponent as LogoIcon } from './logo.svg';

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon />
    </LogoContainer>
  );
};
