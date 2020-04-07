import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid white;
`;

export const MainContainer = styled.main`
  width: 1200px;
  margin: 0 auto;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.text.extraLarge};
`;
