import React, { useMemo } from 'react';
import useFetchMovies, { MovieType } from '../api/movies';
import { Hero, Loader } from '../components';

type HomeProps = {
  type: MovieType;
}

function Home({type}: HomeProps ) {
  const { data, isLoading, error } = useFetchMovies(type);
  const randomMovie = useMemo(() => {
    return data?.results[Math.floor(Math.random() * data.results.length)];
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <p>error...</p>;
  return (
    <>
      <Hero randomMovie={randomMovie} type={type} />
    </>
  );
}

export default Home;
