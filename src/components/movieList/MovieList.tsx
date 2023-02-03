/* eslint-disable no-return-assign */
import React from 'react';
import useFetchMovies from '../../api/movies';
import { MovieType } from '../../types';
import MovieItem from '../movieItem/MovieItem';

type MovieListProps = {
  type: MovieType;
};

function MovieList({ type }: MovieListProps) {
  const { data, isLoading, error } = useFetchMovies(type);

  return (
    <div className="list">
      <h4>Trending</h4>
      <div className="list__wrapper">
        <div className="list__container">
          {data?.results.map((movie) => (
            <MovieItem key={movie.id} img={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
