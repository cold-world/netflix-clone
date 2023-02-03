import React from 'react';
import { IMovie, ITVShow } from '../../types';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

type HeroProps = {
  randomMovie: IMovie | ITVShow | undefined;
};

function Hero({ randomMovie }: HeroProps) {
  return (
    <div className="hero">
      <HeroImage randomMovie={randomMovie} />
      <HeroText randomMovie={randomMovie} />
    </div>
  );
}

export default Hero;
