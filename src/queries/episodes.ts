import gql from 'graphql-tag';

export const GET_EPISODE = gql`
  query AllCharacters($id: ID) {
    episode(id: $id) {
      id
      name
      airDate: air_date
      episode
      characters {
        id
        name
      }
    }
  }
`;
