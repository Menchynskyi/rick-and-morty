import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';
import { GET_ALL_CHARACTES } from '../../../queries';
import { CharacterCard } from '../CharacterCard';
import { PageSwitch, ErrorMessage } from '../../../components';
import { Character } from '../../../types';
import {
  CharacterListContainer,
  PageSwitchContainer,
  CharacterListItem,
} from './CharacterListStyled';
import { useCharacterState } from '../../../contexts';

export const CharacterList: React.FC = () => {
  const { page, filterOptions } = useCharacterState();
  const { data, loading, error } = useQuery(GET_ALL_CHARACTES, {
    variables: { page, filter: filterOptions },
  });

  if (error) return <ErrorMessage text="There are no such characters" />;

  const characters: Character[] = !loading && data.characters.results;
  const content = loading ? (
    <Skeleton width={300} height={300} count={20} />
  ) : (
    characters.map((character) => {
      return (
        <CharacterListItem key={character.id}>
          <CharacterCard character={character} />
        </CharacterListItem>
      );
    })
  );

  return (
    <>
      <CharacterListContainer>{content}</CharacterListContainer>
      {!loading && (
        <PageSwitchContainer>
          <PageSwitch page={page} allPages={data.characters.info.pages} />
        </PageSwitchContainer>
      )}
    </>
  );
};
