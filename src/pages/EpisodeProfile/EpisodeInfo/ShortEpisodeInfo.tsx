import React from 'react';
import { Episode } from '../../../types';
import {
  EpisodeInfoContainer,
  InnerContainer,
  InfoContainer,
  InfoHeader,
  EpisodeTitle,
  ShortInfoContainer,
  ImageContainer,
} from './EpisodeInfoStyled';
import episodePoster from '../../../assets/episode-poster.jpg';
import { ProfileImage, CharacterList } from '../../../components';
import { separateEpisodeNumber } from '../../../utils';

type ShortEpisodeInfoProps = { data: Episode };

export const ShortEpisodeInfo: React.FC<ShortEpisodeInfoProps> = ({ data }) => {
  const [season, episode] = separateEpisodeNumber(data.episode);

  return (
    <EpisodeInfoContainer>
      <InnerContainer>
        <ImageContainer>
          <ProfileImage src={episodePoster} alt={data.name} height={170} />
        </ImageContainer>
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
      <CharacterList
        title="characters"
        listLength={6}
        characters={data.characters}
      />
    </EpisodeInfoContainer>
  );
};
