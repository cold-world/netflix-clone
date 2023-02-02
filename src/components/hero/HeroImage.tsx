import React from 'react';
import { IMovie, ITVShow } from '../../types';

type HeroImageProps = {
  randomMovie: IMovie | ITVShow | undefined;

};

export function HeroImage({ randomMovie }: HeroImageProps) {
  return (
    <>
      <img
        className="hero__img"
        src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
      />
    </>
  );
}
