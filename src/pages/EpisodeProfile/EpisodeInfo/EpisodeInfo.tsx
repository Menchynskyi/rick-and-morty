import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import {
  useEpisodeDispatch,
  useEpisodeState,
  fetchImdb,
} from '../../../contexts';
import { GET_EPISODE } from '../../../queries';
import { ErrorMessage, Loader, ProfileImage } from '../../../components';
import { ShortEpisodeInfo } from './ShortEpisodeInfo';
import { EpisodeInfoContainer } from './EpisodeInfoStyled';
import { CharacterList } from '../CharacterList';

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

  if (loading || loadingImdb) return <Loader />;
  if (error) return <ErrorMessage />;
  if (errorImdb) return <ShortEpisodeInfo data={data.episode} />;

  const episodeData = { ...data.episode, ...dataImdb };

  return (
    <EpisodeInfoContainer>
      <div>
        <ProfileImage
          src={episodeData.poster}
          alt={episodeData.name}
          height={170}
        />
        <span>{episodeData.plot}</span>
      </div>
      <CharacterList characters={episodeData.characters} />
    </EpisodeInfoContainer>
  );
};
