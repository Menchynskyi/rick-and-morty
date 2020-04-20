import React, { useState } from 'react';
import { Character } from '../../../types';
import {
  CharacterListContainer,
  CharacterListStyled,
  CharacterListItem,
  CharactersTitle,
  Button,
  LinkStyled,
  CharacterName,
} from './CharacterListStyled';
import { ProfileImage } from '../../../components';

type CharacterListProps = {
  characters: Character[];
};

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const [characterListIsFull, setCharacterListIsFull] = useState(false);
  const visibleEpisodes = characterListIsFull
    ? characters
    : characters.slice(0, 4);

  const handleClick = () => {
    setCharacterListIsFull((prev) => !prev);
  };

  return (
    <CharacterListContainer>
      <CharactersTitle>characters: </CharactersTitle>
      <CharacterListStyled>
        {visibleEpisodes.map(({ name, id, status, image }) => {
          return (
            <CharacterListItem key={id}>
              <LinkStyled to={`/characters/${id}`}>
                <ProfileImage
                  circle
                  src={image}
                  alt={name}
                  height={40}
                  width={40}
                />
                <CharacterName>{name}</CharacterName>
                <span>{status}</span>
              </LinkStyled>
            </CharacterListItem>
          );
        })}
      </CharacterListStyled>
      {characters.length > 4 && (
        <Button
          isFull={characterListIsFull}
          type="button"
          onClick={handleClick}
        >
          {characterListIsFull ? 'Show less' : 'Show more'}
        </Button>
      )}
    </CharacterListContainer>
  );
};
