export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const displayEpisodeNumber = (episode: string): string => {
  const firstPart = episode.slice(0, episode.length / 2);
  const secondPart = episode.slice(episode.length / 2, episode.length);
  return `${firstPart} ${secondPart}`;
};
