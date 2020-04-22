import gql from 'graphql-tag';

export const GET_LOCATION = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        image
      }
    }
  }
`;

export const GET_ALL_LOCATIONS = gql`
  query AllLocations($filter: FilterLocation, $page: Int!) {
    locations(filter: $filter, page: $page) {
      info {
        next
      }
      results {
        id
        name
        type
      }
    }
  }
`;
