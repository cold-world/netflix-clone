import React from 'react';
import { IMovie, ITVShow, MovieType } from '../../types';
import { HeroImage, HeroText } from '../index';

type HeroProps = {
  type: MovieType;
  randomMovie: IMovie | ITVShow | undefined;
};

export function Hero({ randomMovie }: HeroProps) {
  return (
    <div className="hero">
      <HeroImage randomMovie={randomMovie} />
      <HeroText randomMovie={randomMovie} />
    </div>
  );
}
