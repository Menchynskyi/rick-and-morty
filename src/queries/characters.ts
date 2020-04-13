import gql from 'graphql-tag';

export const GET_ALL_CHARACTES = gql`
  query AllCharacters($filter: FilterCharacter, $page: Int!) {
    characters(filter: $filter, page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;
