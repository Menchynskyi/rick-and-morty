import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharacterListContainer = styled.div`
  margin: 50px 0 30px 0;
`;

export const CharactersTitle = styled.h2`
  margin: 0 0 15px 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background.tertiary.transparent};
`;

export const CharacterListStyled = styled.ul`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.text.regular};
`;

export const CharacterListItem = styled.li`
  position: relative;
  padding: 15px 10px;
  list-style: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s;

  img {
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) =>
      theme.colors.background.secondary.transparent};

    img {
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  span:last-of-type {
    margin-left: auto;
    font-size: ${({ theme }) => theme.fontSize.text.small};
    color: ${({ theme }) => theme.colors.text.secondary};
    text-transform: capitalize;
  }
`;

export const CharacterName = styled.span`
  margin-left: 15px;
  ${CharacterListItem}:hover & {
    color: ${({ theme }) => theme.colors.background.secondary.transparent};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
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

export const Message = styled.div`
  margin-top: 5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.background.tertiary.transparent};
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.skeleton.main};
  border-radius: 50%;
`;
