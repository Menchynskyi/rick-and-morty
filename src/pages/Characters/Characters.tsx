import React from 'react';
import { FilterCharacters } from './FilterCharacters';
import { CharacterList } from './CharacterList';
import { CharacterProvider } from '../../character-context';

export const Characters: React.FC = () => {
  return (
    <CharacterProvider>
      <FilterCharacters />
      <CharacterList />
    </CharacterProvider>
  );
};
