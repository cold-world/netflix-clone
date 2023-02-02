import React, { useMemo } from 'react';
import useFetchMovies, { MovieType } from '../api/movies';
import { Hero, Loader } from '../components';

type TVShowsProps = {
  type: MovieType;
};

function TVShows({ type }: TVShowsProps) {
  const { data, status, error } = useFetchMovies(type);
  const randomMovie = useMemo(() => {
    return data?.results[Math.floor(Math.random() * data.results.length)];
  }, [data]);

  if (status === 'loading') return <Loader />;
  if (error) return <p>error...</p>;
  return (
    <>
      <Hero randomMovie={randomMovie} type={type} />
    </>
  );
}

export default TVShows;
