/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Hero, MovieList } from '../components';
import useDataArray from '../hooks/useDataToArray';
import useRandomMovie from '../hooks/useRandomMovie';

function Movies() {
  const { dataArrayMovies } = useDataArray();
  const topRated = dataArrayMovies[1].type.data;
  const trendingIsLoading = dataArrayMovies[1].type.isLoading;
  const randomMovie = useRandomMovie({ data: topRated });

  return (
    <>
      <Hero randomMovie={randomMovie} />
      {dataArrayMovies.map((item, index) => (
        <MovieList key={item.title} type={item.type.data} title={item.title} />
      ))}
    </>
  );
}

export default Movies;
