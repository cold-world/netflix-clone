/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Hero, MovieList } from '../components';
import useRandomMovie from '../hooks/useRandomMovie';
import useDataArray from '../hooks/useDataToArray';

function Home() {
  const { dataArrayMovies } = useDataArray();
  const trending = dataArrayMovies[0].type.data;
  const trendingIsLoading = dataArrayMovies[0].type.isLoading;
  const randomMovie = useRandomMovie({ data: trending });

  return (
    <>
      <Hero randomMovie={randomMovie} />
      {dataArrayMovies.map((item, index) => (
        <MovieList key={item.title} type={item.type.data} title={item.title} />
      ))}
    </>
  );
}

export default Home;
