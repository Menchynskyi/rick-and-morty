import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_LOCATIONS } from '../../../queries';
import { ErrorMessage } from '../../../components';
import { Location } from '../../../types';
import {
  LocationsContainer,
  LinkStyled,
  LocationsListStyled,
  LocationsListItem,
  Button,
} from './LocationsListStyled';
import { useLocationState } from '../../../contexts';

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

export const LocationsList: React.FC = () => {
  const { filterOptions, page } = useLocationState();
  const { data, loading, error, fetchMore } = useQuery(GET_ALL_LOCATIONS, {
    variables: { page, filter: filterOptions },
  });
  if (loading) return <p>Loading</p>;
  if (error) return <ErrorMessage text="There are no sush locations" />;
  const { locations } = data;
  const locationList: Location[] = locations.results;

  const handleClick = () => {
    if (locations.info.next) {
      fetchMore({
        variables: { page: locations.info.next, filter: filterOptions },
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
      <LocationsListStyled>
        {locationList.map(({ id, name, type }) => (
          <LocationsListItem key={id}>
            <LinkStyled to={`/locations/${id}`}>
              <span>{name}</span>
              <span>{type}</span>
            </LinkStyled>
          </LocationsListItem>
        ))}
      </LocationsListStyled>
      {locations.info.next && (
        <Button type="button" onClick={handleClick}>
          Show more
        </Button>
      )}
    </LocationsContainer>
  );
};
