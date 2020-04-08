import gql from 'graphql-tag';

export const GET_ALL_CHARACTES = gql`
  query AllCharacters($page: Int!) {
    characters(page: $page) {
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
