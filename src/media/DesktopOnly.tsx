import React from 'react';
import styled from 'styled-components';

const DesktopOnlyView = styled.div`
  display: block;

  @media ${({ theme }) => theme.device.mobileS} {
    display: none;
  }
`;

export const DesktopOnly: React.FC = ({ children }) => {
  return <DesktopOnlyView>{children}</DesktopOnlyView>;
};
