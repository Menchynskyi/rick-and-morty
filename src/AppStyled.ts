import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  padding-top: 5px;
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
