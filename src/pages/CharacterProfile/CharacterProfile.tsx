import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_CHARACTER } from '../../queries';
import { ErrorMessage, ProfileImage } from '../../components';
import { ProfileContainer } from './CharacterProfileStyled';

export const CharacterProfile = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  if (loading) return <p>Loading</p>;
  if (error) return <ErrorMessage />;
  console.log(data.character);
  return (
    <ProfileContainer>
      <div>
        <ProfileImage src={data.character.image} alt={data.character.name} />
      </div>
    </ProfileContainer>
  );
};
