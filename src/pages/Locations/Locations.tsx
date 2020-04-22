import React from 'react';
import { LocationsList } from './LocationsList';
import { LocationProvider } from '../../contexts';

export const Locations: React.FC = () => {
  return (
    <LocationProvider>
      <LocationsList />
    </LocationProvider>
  );
};
