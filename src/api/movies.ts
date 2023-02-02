import { useQuery } from 'react-query';

interface IResponsePopularMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IResponsePopularTVShows {
  page: number;
  results: ITVShow[];
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITVShow {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export type MovieType = 'movie' | 'tv';

const fetchMovies = async (
  type: string
): Promise<IResponsePopularMovies | IResponsePopularTVShows> => {
  const response = await fetch(
    `
    https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.MOVIEDB_API_KEY}&page=1`
  );
  const data = await response.json();
  if (type === 'movie') {
    return data as IResponsePopularMovies;
  } else {
    return data as IResponsePopularTVShows;
  }
};

export default function useFetchMovies(type: string) {
  return useQuery(['movies', type], fetchMovies.bind(null, type));
}
