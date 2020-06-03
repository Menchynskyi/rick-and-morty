import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.skeleton.main};

  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
    height: calc(100vw - 20px);

    & img {
      width: 100%;
    }
  }
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  background-color: ${({ theme }) => theme.colors.background.gray.hover};
  transition: all 0.2s;

  ${CardContainer}:hover & {
    color: ${({ theme }) => theme.colors.background.secondary.main};
    background-color: ${({ theme }) =>
      theme.colors.background.gray.transparent};
  }
`;

export const LinkStyled = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.text.card};

  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
  }
`;
