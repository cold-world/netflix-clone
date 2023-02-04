/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import useFetchMovies from '../api/movies';
import { Hero, Loader, MovieList } from '../components';
import useRandomMovie from '../hooks/useRandomMovie';
import requests from '../utils/requests';

function Movies() {
  const {
    data: trending,
    isLoading: trendingIsLoading,
    error: trendingError,
  } = useFetchMovies(requests.movies.trending);
  const {
    data: topRated,
    isLoading: topRatedIsLoading,
    error: topRatedError,
  } = useFetchMovies(requests.movies.topRated);
  const {
    data: action,
    isLoading: actionIsLoading,
    error: actionError,
  } = useFetchMovies(requests.movies.actionMovies);
  const {
    data: comedy,
    isLoading: comedyIsLoading,
    error: comedyError,
  } = useFetchMovies(requests.movies.comedyMovies);
  const {
    data: horror,
    isLoading: horrorIsLoading,
    error: horrorError,
  } = useFetchMovies(requests.movies.horrorMovies);
  const {
    data: romance,
    isLoading: romanceIsLoading,
    error: romanceError,
  } = useFetchMovies(requests.movies.romanceMovies);

  const randomMovie = useRandomMovie({ data: topRated });

  return (
    <>
      <Hero randomMovie={randomMovie} />
      <MovieList type={trending} title="Trending" />
      <MovieList type={topRated} title="Top Rated" />
      <MovieList type={action} title="Action" />
      <MovieList type={comedy} title="Comedy" />
      <MovieList type={horror} title="Horror" />
      <MovieList type={romance} title="Romance" />
    </>
  );
}

export default Movies;
