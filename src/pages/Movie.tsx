import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  useFetchMovie,
  useFetchMovieCast,
  useFetchMovieTeaser,
} from '../api/movies';
import { fetchByIdUrl, fetchCast, fetchTeaser } from '../utils/requests';
import { Hero, Teaser } from '../components';

function Movie() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const isMovie = pathname.includes('/movie/');
  const type = isMovie ? 'movie' : 'tv';
  const { data } = useFetchMovie(fetchByIdUrl(id!, type));
  const { data: cast } = useFetchMovieCast(fetchCast(id!, type));
  const { data: teasers } = useFetchMovieTeaser(fetchTeaser(id!, type));
  return (
    <div className="movie-page">
      <Hero movie={data} cast={cast?.cast} />
      <Teaser teaser={teasers?.results[0]} />
    </div>
  );
}

export default Movie;
