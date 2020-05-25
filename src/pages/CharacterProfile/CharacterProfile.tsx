import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_CHARACTER } from '../../queries';
import { ErrorMessage, ProfileImage, Loader } from '../../components';
import {
  ProfileContainer,
  InfoContainer,
  InfoList,
  InfoListItem,
  Container,
  LinkStyled,
} from './CharacterProfileStyled';
import { EpisodeList } from './EpisodeList';

export const CharacterProfile: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  const { character } = data;

  const originLocation = character.origin.id ? (
    <LinkStyled to={`/locations/${character.origin.id}`}>
      {character.origin.name}
    </LinkStyled>
  ) : (
    <span>{character.origin.name}</span>
  );
  const currentLocation = character.location.id ? (
    <LinkStyled to={`/locations/${character.location.id}`}>
      {character.location.name}
    </LinkStyled>
  ) : (
    <span>{character.location.name}</span>
  );

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage src={character.image} alt={character.name} />
        <InfoContainer>
          <InfoList>
            <InfoListItem>
              <span>name: </span>
              <span>{character.name}</span>
            </InfoListItem>
            <InfoListItem>
              <span>status: </span>
              <span>{character.status}</span>
            </InfoListItem>
            <InfoListItem>
              <span>gender: </span>
              <span>{character.gender}</span>
            </InfoListItem>
            <InfoListItem>
              <span>species: </span>
              <span>{character.species}</span>
            </InfoListItem>
            <InfoListItem>
              <span>type: </span>
              <span>{character.type || 'None'}</span>
            </InfoListItem>
            <InfoListItem>
              <span>origin location: </span>
              <span>{originLocation}</span>
            </InfoListItem>
            <InfoListItem>
              <span>current location: </span>
              <span>{currentLocation}</span>
            </InfoListItem>
          </InfoList>
        </InfoContainer>
      </ProfileContainer>
      <EpisodeList episodes={character.episode} />
    </Container>
  );
};
