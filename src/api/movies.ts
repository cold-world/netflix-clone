import { useQuery } from 'react-query';
import {
  IMovie,
  IMovieCast,
  IMovieTeaser,
  IResponsePopularMovies,
  IResponsePopularTVShows,
  ITVShow,
} from '../types';

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

const fetchMovie = async (id: string): Promise<IMovie | ITVShow> => {
  const response = await fetch(id);
  const data = await response.json();
  return data;
};

export function useFetchMovie(id: string) {
  return useQuery(['movie', id], () => fetchMovie(id));
}

const fetchMovieCast = async (id: string): Promise<IMovieCast> => {
  const response = await fetch(id);
  const data = await response.json();
  return data;
};

export function useFetchMovieCast(id: string) {
  return useQuery(['cast', id], () => fetchMovieCast(id));
}

const fetchMovieTeaser = async (id: string): Promise<IMovieTeaser> => {
  const response = await fetch(id);
  const data = await response.json();
  return data;
};

export function useFetchMovieTeaser(id: string) {
  return useQuery(['teasers', id], () => fetchMovieTeaser(id));
}
