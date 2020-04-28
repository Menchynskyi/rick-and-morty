import React, { useState } from 'react';
import { Episode } from '../../../types';
import {
  EpisodeListContainer,
  EpisodeListStyled,
  EpisodeListItem,
  EpisodesTitle,
  LinkStyled,
  ButtonContainer,
} from './EpisodeListStyled';
import { Button } from '../../../components';
import { displaySeparateEpisode } from '../../../utils';

type EpisodeListProps = {
  episodes: Episode[];
};

export const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  const [episodeListIsFull, setEpisodeListIsFull] = useState(false);
  const visibleEpisodes = episodeListIsFull ? episodes : episodes.slice(0, 7);

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
              <LinkStyled to={`/episodes/${id}/${episode}`}>
                <span>{name}</span>
                <span>{displaySeparateEpisode(episode)}</span>
              </LinkStyled>
            </EpisodeListItem>
          );
        })}
      </EpisodeListStyled>
      {episodes.length > 7 && (
        <ButtonContainer>
          <Button
            color={!episodeListIsFull ? 'primary' : 'secondary'}
            fullWidth
            type="button"
            onClick={handleClick}
          >
            {episodeListIsFull ? 'Show less' : 'Show more'}
          </Button>
        </ButtonContainer>
      )}
    </EpisodeListContainer>
  );
};
