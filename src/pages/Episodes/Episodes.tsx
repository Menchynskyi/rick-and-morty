import React from 'react';
import { EpisodesList } from './EpisodesList';
import { FilterEpisodes } from './FilterEpisodes';

export const Episodes: React.FC = () => {
  return (
    <>
      <FilterEpisodes />
      <EpisodesList />
    </>
  );
};
