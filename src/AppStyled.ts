import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.background.gray.transparent};
`;

export const MainContainer = styled.main`
  padding-top: 5px;
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
