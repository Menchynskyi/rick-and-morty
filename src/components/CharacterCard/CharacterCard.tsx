import React from 'react';
import { Character } from '../../types';
import {
  CardContainer,
  InfoContainer,
  LinkStyled,
} from './CharacterCardStyled';
import { ProfileImage } from '../ProfileImage';

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const shortenName = (name: string): string => {
    const shortName = name.length > 21 ? `${name.slice(0, 19)}...` : name;
    return shortName;
  };
  const characterName = shortenName(character.name);

  return (
    <LinkStyled to={`characters/${character.id}`}>
      <CardContainer>
        <ProfileImage src={character.image} alt={character.name} />
        <InfoContainer>{characterName}</InfoContainer>
      </CardContainer>
    </LinkStyled>
  );
};
