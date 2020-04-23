import gql from 'graphql-tag';

export const GET_ALL_EPISODES = gql`
  query AllEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        next
      }
      results {
        id
        name
        episode
      }
    }
  }
`;

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
        image
        status
      }
    }
  }
`;
