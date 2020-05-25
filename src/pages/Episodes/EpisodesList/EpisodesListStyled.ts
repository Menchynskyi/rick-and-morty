import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EpisodesListContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 17.5px;

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 0 10px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin: 15px auto;
  }
`;
export const EpisodesListStyled = styled.ul`
  padding: 20px 0 5px 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.text.large};

  .react-loading-skeleton {
    height: 82px;
    margin-bottom: 15px;
    border-radius: ${({ theme }) => theme.borderRadius};
    line-height: inherit;
  }
`;

export const EpisodesListItem = styled.li`
  position: relative;
  padding: 30px 20px;
  margin-bottom: 15px;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.background.gray.transparent};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) =>
      theme.colors.background.secondary.transparent};
  }
`;

export const EpisodeName = styled.div`
  ${EpisodesListItem}:hover & {
    color: ${({ theme }) => theme.colors.background.secondary.transparent};
  }
`;

export const EpisodeType = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
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

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 25px;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  color: ${({ theme }) => theme.colors.background.secondary.main};
  border: 1px solid ${({ theme }) => theme.colors.background.secondary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  transform: scale(1);
  transition: all 0.2s, transform 0.1s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.secondary.main};
  }

  &:active {
    transform: scale(0.99);
  }

  &:focus {
    outline: none;
  }
`;
