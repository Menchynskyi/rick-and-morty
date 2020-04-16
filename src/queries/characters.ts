import gql from 'graphql-tag';

export const GET_ALL_CHARACTES = gql`
  query AllCharacters($filter: FilterCharacter, $page: Int!) {
    characters(filter: $filter, page: $page) {
      info {
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
      }
      image
      episode {
        id
        name
      }
    }
  }
`;
