/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Hero, MovieList } from '../components';
import useDataArray from '../hooks/useDataToArray';
import useRandomMovie from '../hooks/useRandomMovie';

function TVShows() {
  const { dataArrayShows } = useDataArray();
  const topRated = dataArrayShows[0].type.data;
  const trendingIsLoading = dataArrayShows[0].type.isLoading;
  const randomMovie = useRandomMovie({ data: topRated });
  return (
    <>
      <Hero randomMovie={randomMovie} />
      {dataArrayShows.map((item, index) => (
        <MovieList key={item.title} type={item.type.data} heading={item.title} />
      ))}
    </>
  );
}

export default TVShows;
