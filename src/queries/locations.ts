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
