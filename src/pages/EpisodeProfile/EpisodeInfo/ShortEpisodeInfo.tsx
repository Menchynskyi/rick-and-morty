import React from 'react';
import { Episode } from '../../../types';
import {
  EpisodeInfoContainer,
  InnerContainer,
  InfoContainer,
  InfoHeader,
  EpisodeTitle,
  ShortInfoContainer,
} from './EpisodeInfoStyled';
import episodePoster from './episode-poster.jpg';
import { ProfileImage } from '../../../components';
import { CharacterList } from '../CharacterList';
import { separateEpisodeNumber } from '../../../utils';

type ShortEpisodeInfoProps = { data: Episode };

export const ShortEpisodeInfo: React.FC<ShortEpisodeInfoProps> = ({ data }) => {
  const [season, episode] = separateEpisodeNumber(data.episode);

  return (
    <EpisodeInfoContainer>
      <InnerContainer>
        <ProfileImage src={episodePoster} alt={data.name} height={170} />
        <InfoContainer>
          <InfoHeader>
            <EpisodeTitle>{data.name}</EpisodeTitle>
          </InfoHeader>
          <ShortInfoContainer>
            <span>{`Season ${season} Episode ${episode}`}</span>
            <span>{data.airDate}</span>
          </ShortInfoContainer>
        </InfoContainer>
      </InnerContainer>
      <CharacterList characters={data.characters} />
    </EpisodeInfoContainer>
  );
};
