import React from 'react';
import { EpisodeProvider } from '../../contexts';
import { EpisodeInfo } from './EpisodeInfo';

export const EpisodeProfile: React.FC = () => {
  return (
    <EpisodeProvider>
      <EpisodeInfo />
    </EpisodeProvider>
  );
};
