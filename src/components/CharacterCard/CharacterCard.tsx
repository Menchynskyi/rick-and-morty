import React from 'react';
import { Character } from '../../types';
import { CardContainer, InfoContainer } from './CharacterCardStyled';

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const shortenName = (name: string): string => {
    const shortName = name.length > 23 ? `${name.slice(0, 22)}...` : name;
    return shortName;
  };
  const characterName = shortenName(character.name);

  return (
    <CardContainer>
      <img src={character.image} alt={character.name} />
      <InfoContainer>{characterName}</InfoContainer>
    </CardContainer>
  );
};
