/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Hero, MovieList } from '../components';
import useRandomMovie from '../hooks/useRandomMovie';
import useDataArray from '../hooks/useDataToArray';

function Home() {
  const { dataArrayMovies } = useDataArray();
  const trending = dataArrayMovies[0].type.data;
  const randomMovie = useRandomMovie({ data: trending });

  return (
    <>
      <Hero movie={randomMovie} />
      <div className="page__wrapper">
        {dataArrayMovies.map((item) => (
          <MovieList
            key={item.title}
            type={item.type.data}
            heading={item.title}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
