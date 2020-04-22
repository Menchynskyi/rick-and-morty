import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LocationsContainer } from './LocationsStyled';
import { GET_ALL_LOCATIONS } from '../../queries';
import { ErrorMessage } from '../../components';
import { Location } from '../../types';

type LocationQuery = {
  locations: {
    info: { page: number };
    results: Location[];
  };
};
type UpdatedQueryData = {
  fetchMoreResult?: LocationQuery;
  variables?:
    | {
        page: number;
        filter: {};
      }
    | undefined;
};

export const Locations: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error, fetchMore } = useQuery(GET_ALL_LOCATIONS, {
    variables: { page, filter: {} },
  });
  if (loading) return <p>Loading</p>;
  if (error) return <ErrorMessage text="There are no sush locations" />;
  const { locations } = data;

  const handleClick = () => {
    if (locations.info.next) {
      fetchMore({
        variables: { page: locations.info.next, filter: {} },
        updateQuery: (prev, current: UpdatedQueryData) => {
          if (!current.fetchMoreResult) return prev;
          return {
            locations: {
              ...current.fetchMoreResult.locations,
              results: [
                ...prev.locations.results,
                ...current.fetchMoreResult.locations.results,
              ],
            },
          };
        },
      });
    }
  };

  return (
    <LocationsContainer>
      Locations
      <button type="button" onClick={handleClick}>
        More
      </button>
    </LocationsContainer>
  );
};
