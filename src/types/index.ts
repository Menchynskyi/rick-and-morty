export type Location = {
  id: string;
  name: string;
};

export type Episode = {
  id: string;
  name: string;
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
