import React from 'react';
import { Character } from '../../../types';
import {
  CardContainer,
  InfoContainer,
  LinkStyled,
} from './CharacterCardStyled';
import { ProfileImage } from '../../../components/ProfileImage';
import { shortenName } from '../../../utils';

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const characterName = shortenName(character.name, 21);

  return (
    <LinkStyled to={`characters/${character.id}`}>
      <CardContainer>
        <ProfileImage src={character.image} alt={character.name} />
        <InfoContainer>{characterName}</InfoContainer>
      </CardContainer>
    </LinkStyled>
  );
};
