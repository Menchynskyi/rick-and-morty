import React, { useState } from 'react';
import { Episode } from '../../../types';
import { EpisodeListContainer } from './EpisodeListStyled';

type EpisodeListProps = {
  episodes: Episode[];
};

export const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  const [episodeListIsFull, setEpisodeListIsFull] = useState(false);
  const visibleEpisodes = episodeListIsFull ? episodes : episodes.slice(0, 5);
  return (
    <EpisodeListContainer>
      <span>Episodes: </span>
      <div>
        {visibleEpisodes.map(({ name, id }) => {
          return <div key={id}>{name}</div>;
        })}
        {!episodeListIsFull && (
          <button type="button" onClick={() => setEpisodeListIsFull(true)}>
            ...
          </button>
        )}
      </div>
    </EpisodeListContainer>
  );
};
