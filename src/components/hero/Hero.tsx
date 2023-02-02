import React from 'react';
import { IMovie, ITVShow } from '../../api/movies';
import { HeroImage, HeroText } from '../index';

type HeroProps = {
  type: 'movie' | 'tv' | 'personal';
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
