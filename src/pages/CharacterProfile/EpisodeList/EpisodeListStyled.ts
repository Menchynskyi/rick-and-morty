import styled, { css } from 'styled-components';

export const EpisodeListContainer = styled.div`
  margin: 50px 0;
`;

export const EpisodesTitle = styled.h2`
  margin-bottom: 15px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background.tertiary.transparent};
`;

export const EpisodeListStyled = styled.ul`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.text.regular};
`;

export const EpisodeListItem = styled.li`
  display: flex;
  justify-content: space-between;
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

const fullHover = css`
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.tertiary.main};
`;

const notFullHover = css`
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.secondary.main};
`;

export const Button = styled.button<{ isFull: boolean }>`
  display: block;
  width: 100%;
  margin-top: 10px;
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
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    ${({ isFull }) => (isFull ? fullHover : notFullHover)};
  }

  &:focus {
    outline: none;
  }
`;
