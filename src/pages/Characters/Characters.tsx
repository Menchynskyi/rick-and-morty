import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';
import { GET_ALL_CHARACTES } from '../../queries';
import { CharacterCard } from '../../components';
import { Character } from '../../types';
import { CharactersContainer } from './CharactersStyled';

export const Characters = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTES, {
    variables: { page: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const characters: Character[] = data.characters.results;

  return (
    <CharactersContainer>
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      }) || <Skeleton />}
    </CharactersContainer>
  );
};
