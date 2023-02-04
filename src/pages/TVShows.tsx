/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import useFetchMovies from '../api/movies';
import { Hero, Loader, MovieList } from '../components';
import useRandomMovie from '../hooks/useRandomMovie';
import requests from '../utils/requests';

function TVShows() {
  const {
    data: trending,
    isLoading: trendingIsLoading,
    error: trendingError,
  } = useFetchMovies(requests.tv.trending);
  const {
    data: topRated,
    isLoading: topRatedIsLoading,
    error: topRatedError,
  } = useFetchMovies(requests.tv.topRated);

  const {
    data: comedy,
    isLoading: comedyIsLoading,
    error: comedyError,
  } = useFetchMovies(requests.tv.comedyMovies);

  const {
    data: romance,
    isLoading: romanceIsLoading,
    error: romanceError,
  } = useFetchMovies(requests.tv.romanceMovies);
  const {
    data: documentaries,
    isLoading: documentariesIsLoading,
    error: documentariesError,
  } = useFetchMovies(requests.tv.documentaries);

  const randomMovie = useRandomMovie({ data: topRated });
  return (
    <>
      <Hero randomMovie={randomMovie} />
      <MovieList type={trending} title="Trending" />
      <MovieList type={topRated} title="Top Rated" />
      <MovieList type={comedy} title="Comedy" />
      <MovieList type={romance} title="Romance" />
      <MovieList type={documentaries} title="Documentaries" />
    </>
  );
}

export default TVShows;
