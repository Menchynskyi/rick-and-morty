import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EpisodeListContainer = styled.div`
  margin: 20px 0 30px 0;

  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 50px;
  }
`;

export const EpisodesTitle = styled.h2`
  margin: 0 0 15px 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background.tertiary.transparent};
`;

export const EpisodeListStyled = styled.ul`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.text.regular};
`;

export const EpisodeListItem = styled.li`
  position: relative;
  padding: 15px 10px;
  list-style: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) =>
      theme.colors.background.secondary.transparent};

    & span:first-of-type {
      color: ${({ theme }) => theme.colors.background.secondary.transparent};
    }
  }

  span:last-of-type {
    font-size: ${({ theme }) => theme.fontSize.text.small};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: '';
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
`;
