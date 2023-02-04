import { useQuery } from 'react-query';
import { IResponsePopularMovies, IResponsePopularTVShows } from '../types';

const fetchMovies = async (
  request: string
): Promise<IResponsePopularMovies | IResponsePopularTVShows> => {
  const response = await fetch(request);
  const data = await response.json();
  return data;
};

export default function useFetchMovies(request: string) {
  return useQuery(['movies', request], fetchMovies.bind(null, request));
}
// https://api.themoviedb.org/3/trending/tv?api_key=df9160c0ebafc69817cfafbb24c59e9b&with_genres=35
