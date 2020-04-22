import React from 'react';
import { LocationsList } from './LocationsList';
import { LocationProvider } from '../../contexts';
import { FilterLocations } from './FilterLocations';

export const Locations: React.FC = () => {
  return (
    <LocationProvider>
      <FilterLocations />
      <LocationsList />
    </LocationProvider>
  );
};
