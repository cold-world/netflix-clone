import React from 'react';
import { IMovie, ITVShow } from '../../types';

type HeroImageProps = {
  movie: IMovie | ITVShow | undefined;
};

function HeroImage({ movie }: HeroImageProps) {
  const title = movie && 'title' in movie ? movie.title : movie && movie.name;

  return (
    <img
      className="hero__img"
      src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
      alt={title}
    />
  );
}

export default HeroImage;
