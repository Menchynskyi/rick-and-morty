export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export const displayEpisodeNumber = (episode: string): string => {
  const firstPart = episode.slice(0, episode.length / 2);
  const secondPart = episode.slice(episode.length / 2, episode.length);
  return `${firstPart} ${secondPart}`;
};

export const separateEpisodeNumber = (episode: string): [number, number] => {
  const reg = /[S,E,s,e]/;
  const splittedEpisode = episode
    .split(reg)
    .filter(Boolean)
    .map((str) => Number(str));
  return [splittedEpisode[0], splittedEpisode[1]];
};

export const combineEpisodeNumber = (
  season: string,
  episode: string
): string => {
  const seasonNumber = `S0${season}`;
  const episodeNumber = +episode < 10 ? `E0${episode}` : `E${episode}`;
  if (!season) {
    return `${episodeNumber}`;
  }
  if (!episode) {
    return `${seasonNumber}`;
  }
  return `${seasonNumber}${episodeNumber}`;
};
