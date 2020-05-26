import React from 'react';
import styled from 'styled-components';

const MobileOnlyView = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.mobileS} {
    display: block;
  }
`;

export const MobileOnly: React.FC = ({ children }) => {
  return <MobileOnlyView>{children}</MobileOnlyView>;
};
