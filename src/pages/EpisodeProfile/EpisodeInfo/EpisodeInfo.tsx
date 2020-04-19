import React, { useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import {
  useEpisodeDispatch,
  useEpisodeState,
  fetchImdb,
} from '../../../contexts';
import { GET_EPISODE } from '../../../queries';
import { ErrorMessage, Loader } from '../../../components';

export const EpisodeInfo: React.FC = () => {
  const dispatch = useEpisodeDispatch();
  const { dataImdb, loadingImdb, errorImdb } = useEpisodeState();
  const { id, episodeNumber } = useParams();
  const { data, loading, error } = useQuery(GET_EPISODE, {
    variables: { id },
  });

  useEffect(() => {
    fetchImdb(dispatch, episodeNumber);
    return () => {
      dispatch({ type: 'resetDataImdb' });
    };
    // eslint-disable-next-line
  }, []);

  const loader = useMemo(() => <Loader />, []);
  if (loading || loadingImdb) return loader;
  if (error) return <ErrorMessage />;
  if (errorImdb) return <>Short Info Page</>;

  const episodeData = { ...data.episode, ...dataImdb };

  return (
    <div>
      <span>{episodeData.plot}</span>
      <img src={episodeData.poster} alt={episodeData.name} />
    </div>
  );
};
