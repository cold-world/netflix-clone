export const raitingHandler = (movieRating: number | undefined) => {
  const raiting = movieRating?.toFixed(2);
  const ratingColor =
    // eslint-disable-next-line no-nested-ternary
    raiting && +raiting > 6.9
      ? 'raiting-green'
      : raiting && +raiting > 5.9
      ? 'raiting-orange'
      : 'raiting-red';

  return { raiting, ratingColor };
};

const genres: { [key: string]: string } = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
  10759: 'Action & Adventure',
  10762: 'Kids',
  10763: 'News',
  10764: 'Reality',
  10765: 'Sci-Fi & Fantasy',
  10766: 'Soap',
  10767: 'Talk',
  10768: 'War & Politics',
};

export const getGenres = (genreIds: number[]): string[] => {
  return genreIds.map((id) => genres[id]);
};
