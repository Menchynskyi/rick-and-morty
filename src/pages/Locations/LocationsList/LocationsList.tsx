import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';
import { GET_ALL_LOCATIONS } from '../../../queries';
import { ErrorMessage, Button } from '../../../components';
import { Location } from '../../../types';
import {
  LocationsContainer,
  LinkStyled,
  LocationsListStyled,
  LocationsListItem,
  ButtonContainer,
  LocationName,
  LocationType,
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

  if (error) return <ErrorMessage text="There are no sush locations" />;

  const handleClick = () => {
    if (data.locations.info.next) {
      fetchMore({
        variables: { page: data.locations.info.next, filter: filterOptions },
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

  const locationList: Location[] = !loading && data.locations.results;
  const content = loading ? (
    <Skeleton count={10} />
  ) : (
    locationList.map(({ id, name, type }) => (
      <LocationsListItem key={id}>
        <LinkStyled to={`/locations/${id}`}>
          <LocationName>{name}</LocationName>
          <LocationType>{type}</LocationType>
        </LinkStyled>
      </LocationsListItem>
    ))
  );

  return (
    <LocationsContainer>
      <LocationsListStyled>{content}</LocationsListStyled>
      {!loading && data.locations.info.next && (
        <ButtonContainer>
          <Button
            color="primary"
            size="large"
            fullWidth
            type="button"
            onClick={handleClick}
          >
            Show more
          </Button>
        </ButtonContainer>
      )}
    </LocationsContainer>
  );
};
