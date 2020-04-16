import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ImageStyled } from './ProfileImageStyled';

type ProfileImageProps = {
  src: string;
  alt: string;
};

export const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <>
      {!imageIsLoaded && <Skeleton width={300} height={300} />}
      <ImageStyled
        onLoad={() => {
          setImageIsLoaded(true);
        }}
        isLoaded={imageIsLoaded}
        {...props}
      />
    </>
  );
};
