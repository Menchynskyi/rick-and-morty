import React, { useMemo } from 'react';
import { LoaderContainer } from './LoaderStyled';

type Loader = {
  imgSrc?: string;
};

const animationsList = [
  'https://media.giphy.com/media/dz6NpfESnqqcnJH1MY/giphy.gif',
  'https://media.giphy.com/media/g04poZxA1nAyTs9DQY/giphy.gif',
  'https://media.giphy.com/media/QyKKSidc5rd0Y1Iw3z/giphy.gif',
  'https://media.giphy.com/media/l378w2NKt3URm6w5W/giphy.gif',
];

export const Loader: React.FC<Loader> = ({ imgSrc }) => {
  const randomNumber = Math.floor(Math.random() * animationsList.length);

  return useMemo(() => {
    const generateAnimation = (list: string[], id: number): string => {
      if (imgSrc) return imgSrc;
      return list[id];
    };
    return (
      <LoaderContainer>
        <img
          height="300"
          src={generateAnimation(animationsList, randomNumber)}
          alt="loader"
        />
      </LoaderContainer>
    );
    // eslint-disable-next-line
  }, []);
};
