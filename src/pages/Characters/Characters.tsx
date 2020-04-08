import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';
import { GET_ALL_CHARACTES } from '../../queries';
import { CharacterCard } from '../../components';
import { Character } from '../../types';
import { CharactersContainer } from './CharactersStyled';

export const Characters = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTES, {
    variables: { page: 20 },
  });

  if (error) return <p>Error...</p>;

  const characters: Character[] = !loading && data.characters.results;
  const content = loading ? (
    <Skeleton width={300} height={300} count={12} />
  ) : (
    characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    })
  );

  return <CharactersContainer>{content}</CharactersContainer>;
};
