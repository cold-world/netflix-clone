import { useQuery } from 'react-query';
import {
  IResponsePopularMovies,
  IResponsePopularTVShows,
  MovieType,
} from '../types';

const fetchMovies = async (
  type: MovieType = 'movie'
): Promise<IResponsePopularMovies | IResponsePopularTVShows> => {
  const response = await fetch(
    `
    https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.MOVIEDB_API_KEY}&page=1`
  );
  const data = await response.json();
  if (type === 'movie') {
    return data as IResponsePopularMovies;
  }
  return data as IResponsePopularTVShows;
};

export default function useFetchMovies(type: MovieType) {
  return useQuery(['trending', type], fetchMovies.bind(null, type));
}