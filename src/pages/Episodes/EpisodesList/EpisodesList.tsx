import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';
import { GET_ALL_EPISODES } from '../../../queries';
import { ErrorMessage, Button } from '../../../components';
import { Episode } from '../../../types';
import {
  EpisodeName,
  EpisodeType,
  EpisodesListContainer,
  EpisodesListItem,
  EpisodesListStyled,
  LinkStyled,
  ButtonContainer,
} from './EpisodesListStyled';
import { useEpisodeState } from '../../../contexts';
import { displaySeparateEpisode, shortenName } from '../../../utils';

type EpisodeQuery = {
  episodes: {
    info: { page: number };
    results: Episode[];
  };
};
type UpdatedQueryData = {
  fetchMoreResult?: EpisodeQuery;
  variables?:
    | {
        page: number;
        filter: {};
      }
    | undefined;
};

export const EpisodesList: React.FC = () => {
  const { filterOptions, page } = useEpisodeState();
  const { data, loading, error, fetchMore } = useQuery(GET_ALL_EPISODES, {
    variables: { page, filter: filterOptions },
  });

  if (error) return <ErrorMessage text="There are no sush episodes" />;

  const handleClick = () => {
    if (data.episodes.info.next) {
      fetchMore({
        variables: { page: data.episodes.info.next, filter: filterOptions },
        updateQuery: (prev, current: UpdatedQueryData) => {
          if (!current.fetchMoreResult) return prev;
          return {
            episodes: {
              ...current.fetchMoreResult.episodes,
              results: [
                ...prev.episodes.results,
                ...current.fetchMoreResult.episodes.results,
              ],
            },
          };
        },
      });
    }
  };

  const episodeList: Episode[] = !loading && data.episodes.results;
  const content = loading ? (
    <Skeleton count={10} />
  ) : (
    episodeList.map(({ id, name, episode }) => {
      const shortName = shortenName(name, 21);
      return (
        <EpisodesListItem key={id}>
          <LinkStyled to={`/episodes/${id}/${episode}`}>
            <EpisodeName>{shortName}</EpisodeName>
            <EpisodeType>{displaySeparateEpisode(episode)}</EpisodeType>
          </LinkStyled>
        </EpisodesListItem>
      );
    })
  );

  return (
    <EpisodesListContainer>
      <EpisodesListStyled>{content}</EpisodesListStyled>
      {!loading && data.episodes.info.next && (
        <ButtonContainer>
          <Button
            color="primary"
            size="large"
            fullWidth
            type="button"
            onClick={handleClick}
          >
            Show more
          </Button>
        </ButtonContainer>
      )}
    </EpisodesListContainer>
  );
};
