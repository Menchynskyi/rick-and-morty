import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Character } from '../../types';
import { CardContainer, InfoContainer, CardImage } from './CharacterCardStyled';

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  const shortenName = (name: string): string => {
    const shortName = name.length > 22 ? `${name.slice(0, 20)}...` : name;
    return shortName;
  };
  const characterName = shortenName(character.name);

  return (
    <CardContainer>
      {!imageIsLoaded && <Skeleton width={300} height={300} />}
      <CardImage
        src={character.image}
        alt={character.name}
        onLoad={() => {
          setImageIsLoaded(true);
        }}
        isLoaded={imageIsLoaded}
      />
      <InfoContainer>{characterName}</InfoContainer>
    </CardContainer>
  );
};
