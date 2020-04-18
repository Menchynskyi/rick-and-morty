import React, { useState } from 'react';
import { Episode } from '../../../types';
import {
  EpisodeListContainer,
  EpisodeListStyled,
  EpisodeListItem,
  EpisodesTitle,
  Button,
  LinkStyled,
} from './EpisodeListStyled';
import { displayEpisodeNumber } from '../../../utils';

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
        {visibleEpisodes.map(({ name, id, episode }) => {
          return (
            <EpisodeListItem key={id}>
              <LinkStyled to={`/episodes/${id}`}>
                <span>{name}</span>
                <span>{displayEpisodeNumber(episode)}</span>
              </LinkStyled>
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
