export const scrollToTop = () => {
  window.scrollTo(0, 0);
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
