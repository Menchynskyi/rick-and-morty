import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CharacterListContainer = styled.div`
  margin: 50px 0 30px 0;
`;

export const CharactersTitle = styled.h2`
  margin-bottom: 15px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.text.large};
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

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) =>
      theme.colors.background.secondary.transparent};
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

const fullHover = css`
  background-color: ${({ theme }) => theme.colors.background.tertiary.main};
`;

const notFullHover = css`
  background-color: ${({ theme }) => theme.colors.background.secondary.main};
`;

export const Button = styled.button<{ isFull: boolean }>`
  display: block;
  width: 100%;
  margin-top: 15px;
  padding: 15px;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  color: ${({ isFull, theme }) =>
    isFull
      ? theme.colors.background.tertiary.main
      : theme.colors.background.secondary.main};
  border: 1px solid
    ${({ isFull, theme }) =>
      isFull
        ? theme.colors.background.tertiary.main
        : theme.colors.background.secondary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  transform: scale(1);
  transition: all 0.2s, transform 0.1s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.primary};
    ${({ isFull }) => (isFull ? fullHover : notFullHover)};
  }

  &:active {
    transform: scale(0.99);
  }

  &:focus {
    outline: none;
  }
`;
