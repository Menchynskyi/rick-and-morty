import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background.gray.transparent};
`;

export const MainContainer = styled.main`
  margin-top: 65px;
  padding-top: 5px;
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
