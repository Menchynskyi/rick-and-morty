import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  width: 1200px;
  margin: 0 auto;
`;

export const LinkStyled = styled(Link)`
  cursor: default;

  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
