import React, { useState } from 'react';
import { Character } from '../../types';
import {
  CharacterListContainer,
  CharacterListStyled,
  CharacterListItem,
  CharactersTitle,
  ButtonContainer,
  LinkStyled,
  CharacterName,
  Message,
  ImageContainer,
} from './CharacterListStyled';
import { ProfileImage } from '../ProfileImage';
import { Button } from '../Button';

type CharacterListProps = {
  characters: Character[];
  listLength: number;
  title: string;
};

export const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  listLength,
  title,
}) => {
  const [characterListIsFull, setCharacterListIsFull] = useState(false);
  const filteredCharacters = characters.filter((char) => char.id);
  const visibleEpisodes = characterListIsFull
    ? filteredCharacters
    : filteredCharacters.slice(0, listLength);

  const handleClick = () => {
    setCharacterListIsFull((prev) => !prev);
  };

  if (filteredCharacters.length === 0)
    return <Message>{`There are no ${title}`}</Message>;

  return (
    <CharacterListContainer>
      <CharactersTitle>{`${title}: `}</CharactersTitle>
      <CharacterListStyled>
        {visibleEpisodes.map(({ name, id, status, image }) => {
          return (
            <CharacterListItem key={id}>
              <LinkStyled to={`/characters/${id}`}>
                <ImageContainer>
                  <ProfileImage circle src={image} alt={name} height={40} />
                </ImageContainer>
                <CharacterName>{name}</CharacterName>
                <span>{status}</span>
              </LinkStyled>
            </CharacterListItem>
          );
        })}
      </CharacterListStyled>
      {filteredCharacters.length > listLength && (
        <ButtonContainer>
          <Button
            color={!characterListIsFull ? 'primary' : 'secondary'}
            fullWidth
            type="button"
            onClick={handleClick}
          >
            {characterListIsFull ? 'Show less' : 'Show more'}
          </Button>
        </ButtonContainer>
      )}
    </CharacterListContainer>
  );
};
