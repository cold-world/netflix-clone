import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchMovie } from '../api/movies';
import { fetchByIdUrl } from '../utils/requests';
import { Hero } from '../components';

function Movie() {
  const { id } = useParams();
  const { data } = useFetchMovie(fetchByIdUrl(id!));
  return (
    <div className="movie-page">
      <Hero movie={data} />
    </div>
  );
}

export default Movie;
