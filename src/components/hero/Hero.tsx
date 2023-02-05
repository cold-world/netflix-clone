import React from 'react';
import { IMovie, ITVShow } from '../../types';
import Loader from '../ui/Loader';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

type HeroProps = {
  randomMovie: IMovie | ITVShow | undefined;
};

function Hero({ randomMovie }: HeroProps) {
  return (
    <div className="hero">
      {!randomMovie?.backdrop_path ? (
        <Loader />
      ) : (
        <>
          <HeroImage randomMovie={randomMovie} />
          <HeroText randomMovie={randomMovie} />{' '}
        </>
      )}
    </div>
  );
}

export default Hero;
