import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Loader, ErrorMessage, CharacterList } from '../../components';
import { GET_LOCATION } from '../../queries';
import {
  LocationContainer,
  InfoContainer,
  LocationTitle,
  ExtraInfoContainer,
} from './LocationProfileStyled';

export const LocationProfile: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_LOCATION, {
    variables: { id },
  });
  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  const { location } = data;

  const shortLocationName = (longName: string): string => {
    const descriptionIndex = longName.indexOf('(');
    if (descriptionIndex === -1) return longName;
    return longName.slice(0, descriptionIndex - 1);
  };
  const locationShortName = shortLocationName(location.name);
  const dimensionName = !location.dimension.toLowerCase().includes('dimension')
    ? `${location.dimension} dimension`
    : location.dimension;
  const typeName =
    location.type === 'unknown' ? `${location.type} type` : location.type;

  return (
    <LocationContainer>
      <InfoContainer>
        <LocationTitle>{locationShortName}</LocationTitle>
        <ExtraInfoContainer>
          <span>{dimensionName}</span>
          <span>{typeName}</span>
        </ExtraInfoContainer>
      </InfoContainer>
      <CharacterList
        characters={location.residents}
        title="residents"
        listLength={7}
      />
    </LocationContainer>
  );
};
