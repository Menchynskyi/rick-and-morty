import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';
import { GET_ALL_CHARACTES } from '../../queries';
import {
  CharacterCard,
  PageSwitch,
  ErrorMessage,
  FilterCharacters,
} from '../../components';
import { Character } from '../../types';
import { CharactersContainer } from './CharactersStyled';

export const Characters: React.FC = () => {
  const [filterState, setFilterState] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  });
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(GET_ALL_CHARACTES, {
    variables: { page, filter: filterState },
  });

  if (error) return <ErrorMessage text="There are no such characters" />;

  const characters: Character[] = !loading && data.characters.results;
  const content = loading ? (
    <Skeleton width={300} height={300} count={20} />
  ) : (
    characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    })
  );

  return (
    <>
      <FilterCharacters
        filterState={filterState}
        setFilterState={setFilterState}
      />
      <CharactersContainer>{content}</CharactersContainer>
      {!loading && (
        <PageSwitch
          page={page}
          allPages={data.characters.info.pages}
          setPage={setPage}
        />
      )}
    </>
  );
};
