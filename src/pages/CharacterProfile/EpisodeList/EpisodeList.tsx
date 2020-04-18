import React, { useState } from 'react';
import { Episode } from '../../../types';
import {
  EpisodeListContainer,
  EpisodeListStyled,
  EpisodeListItem,
  EpisodesTitle,
  Button,
} from './EpisodeListStyled';

type EpisodeListProps = {
  episodes: Episode[];
};

export const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  const [episodeListIsFull, setEpisodeListIsFull] = useState(false);
  const visibleEpisodes = episodeListIsFull ? episodes : episodes.slice(0, 5);

  const handleClick = () => {
    setEpisodeListIsFull((prev) => !prev);
  };

  return (
    <EpisodeListContainer>
      <EpisodesTitle>episodes: </EpisodesTitle>
      <EpisodeListStyled>
        {visibleEpisodes.map(({ name, id, air_date }) => {
          return (
            <EpisodeListItem key={id}>
              <span>{name}</span>
              <span>{air_date}</span>
            </EpisodeListItem>
          );
        })}
      </EpisodeListStyled>
      {episodes.length > 5 && (
        <Button isFull={episodeListIsFull} type="button" onClick={handleClick}>
          {episodeListIsFull ? 'Show less' : 'Show more'}
        </Button>
      )}
    </EpisodeListContainer>
  );
};
