import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import {
  useEpisodeDispatch,
  useEpisodeState,
  fetchImdb,
} from '../../../contexts';
import { GET_EPISODE } from '../../../queries';
import {
  ErrorMessage,
  Loader,
  ProfileImage,
  CharacterList,
} from '../../../components';
import { ShortEpisodeInfo } from './ShortEpisodeInfo';
import {
  EpisodeInfoContainer,
  PlotTitle,
  PlotContainer,
  InnerContainer,
  InfoContainer,
  ImdbContainer,
  InfoHeader,
  EpisodeTitle,
  ExtraInfoContainer,
} from './EpisodeInfoStyled';
import { separateEpisodeNumber } from '../../../utils';

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
  const [season, episode] = separateEpisodeNumber(episodeData.episode);

  return (
    <EpisodeInfoContainer>
      <InnerContainer>
        <ProfileImage
          src={episodeData.poster}
          alt={episodeData.name}
          height={170}
        />
        <InfoContainer>
          <InfoHeader>
            <EpisodeTitle>{episodeData.name}</EpisodeTitle>
          </InfoHeader>
          <div>
            <ImdbContainer>
              <span>{`Season ${season} Episode ${episode}`}</span>
              <span>
                {episodeData.rating}
                <FontAwesomeIcon icon={faImdb} size="lg" />
              </span>
            </ImdbContainer>
            <ExtraInfoContainer>
              <span>{episodeData.airDate}</span>
              <span>
                <FontAwesomeIcon icon={faClock} />
                {episodeData.runtime}
              </span>
            </ExtraInfoContainer>
          </div>
        </InfoContainer>
      </InnerContainer>
      <PlotContainer>
        <PlotTitle>Plot: </PlotTitle>
        <div>{episodeData.plot}</div>
      </PlotContainer>
      <CharacterList
        title="characters"
        listLength={4}
        characters={episodeData.characters}
      />
    </EpisodeInfoContainer>
  );
};
