import React from 'react';
import { IMovie, ITVShow } from '../../types';

type HeroImageProps = {
  randomMovie: IMovie | ITVShow | undefined;
};

function HeroImage({ randomMovie }: HeroImageProps) {
  const title =
    randomMovie && 'title' in randomMovie
      ? randomMovie.title
      : randomMovie && randomMovie.name;

  return (
    <img
      className="hero__img"
      src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
      alt={title}
    />
  );
}

export default HeroImage;
