import React from 'react';
import { Episode } from '../../../types';
import { EpisodeInfoContainer } from './EpisodeInfoStyled';

type ShortEpisodeInfoProps = { data: Episode };

export const ShortEpisodeInfo: React.FC<ShortEpisodeInfoProps> = ({ data }) => {
  return <EpisodeInfoContainer>{data.name}</EpisodeInfoContainer>;
};
