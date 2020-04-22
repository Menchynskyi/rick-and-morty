import React, { useState } from 'react';
import { ImageStyled } from './ProfileImageStyled';

type ProfileImageProps = {
  src: string;
  alt: string;
  height?: number;
  circle?: boolean;
};

export const ProfileImage: React.FC<ProfileImageProps> = ({
  height,
  circle,
  ...rest
}) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const handleLoad = () => {
    setImageIsLoaded(true);
  };
  return (
    <>
      <ImageStyled
        height={height || '100%'}
        onLoad={handleLoad}
        isLoaded={imageIsLoaded}
        {...rest}
      />
    </>
  );
};
