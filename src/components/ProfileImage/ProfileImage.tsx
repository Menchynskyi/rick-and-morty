import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ImageStyled } from './ProfileImageStyled';

type ProfileImageProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  circle?: boolean;
};

export const ProfileImage: React.FC<ProfileImageProps> = ({
  height,
  width,
  circle,
  ...rest
}) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <>
      {!imageIsLoaded && (
        <Skeleton
          width={width || 300}
          height={height || 300}
          circle={circle || false}
        />
      )}
      <ImageStyled
        height={height || '100%'}
        onLoad={() => {
          setImageIsLoaded(true);
        }}
        isLoaded={imageIsLoaded}
        {...rest}
      />
    </>
  );
};
