import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { GET_CHARACTER } from '../../queries';
import { ErrorMessage, ProfileImage, Loader } from '../../components';
import {
  ProfileContainer,
  InfoContainer,
  InfoList,
  InfoListItem,
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
  return (
    <ProfileContainer>
      <InfoContainer>
        <ProfileImage src={character.image} alt={character.name} />
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
            <span>{character.origin.name}</span>
          </InfoListItem>
          <InfoListItem>
            <span>current location: </span>
            <span>{character.location.name}</span>
          </InfoListItem>
        </InfoList>
      </InfoContainer>
      <EpisodeList episodes={character.episode} />
    </ProfileContainer>
  );
};
