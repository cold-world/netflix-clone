import { useQuery } from 'react-query';
import { IMovie, IResponsePopularMovies, IResponsePopularTVShows, ITVShow } from '../types';

const fetchMovies = async (
  request: string
): Promise<IResponsePopularMovies | IResponsePopularTVShows> => {
  const response = await fetch(request);
  const data = await response.json();
  return data;
};

export function useFetchMovies(request: string) {
  return useQuery(['movies', request], () => fetchMovies(request));
}


const fetchMovie = async (
  id: string
): Promise<IMovie | ITVShow> => {
  const response = await fetch(id);
  const data = await response.json();
  return data;
};

export function useFetchMovie(id: string) {
  return useQuery(['movie', id], () => fetchMovie(id));
}