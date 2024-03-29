import { episodNameReg } from '../constants/regex';

export const scrollTo = (
  top: number,
  left: number,
  behavior: 'auto' | 'smooth'
) => {
  window.scrollTo({ top, left, behavior });
};

export const displaySeparateEpisode = (episode: string): string => {
  if (!episodNameReg.test(episode)) {
    return 'No such episode';
  }
  const splittedEpisode = episode.split(episodNameReg).filter(Boolean);
  return `S${splittedEpisode[0]} E${splittedEpisode[1]}`;
};

export const separateEpisodeNumber = (
  episode: string
): [number, number] | [string, string] => {
  if (!episodNameReg.test(episode)) {
    return ['', ''];
  }
  const splittedEpisode = episode
    .split(episodNameReg)
    .filter(Boolean)
    .map((str) => Number(str));
  return [splittedEpisode[0], splittedEpisode[1]];
};

export const combineEpisodeNumber = (
  season: string,
  episode: string
): string => {
  if (Number.isNaN(+season) || Number.isNaN(+episode)) {
    return '';
  }
  const seasonNumber = +season < 10 ? `S0${season}` : `S${season}`;
  const episodeNumber = +episode < 10 ? `E0${episode}` : `E${episode}`;
  if (!season) {
    return `${episodeNumber}`;
  }
  if (!episode) {
    return `${seasonNumber}`;
  }
  return `${seasonNumber}${episodeNumber}`;
};

export const shortenName = (name: string, length: number): string => {
  if (!name) return '';
  const shortName =
    name.length > length ? `${name.slice(0, length - 2)}...` : name;
  return shortName;
};
