export type Location = {
  id: string;
  name: string;
  type?: string;
  dimension?: string;
  residents?: Character[];
};

export type Episode = {
  id: string;
  name: string;
  episode: string;
  airDate?: string;
  characters: Character[];
};

export type Character = {
  id: string;
  image: string;
  name: string;
  type?: string;
  status?: string;
  gender?: string;
  species?: string;
  location?: Location;
  episode?: Episode[];
  origin?: Location;
};

export type Route = {
  name: string;
  path: string;
};
