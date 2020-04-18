import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_EPISODE } from '../../queries';
import { ErrorMessage, Loader } from '../../components';

export const EpisodeProfile: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_EPISODE, {
    variables: { id },
  });
  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  const { episode } = data;
  return <div />;
};
