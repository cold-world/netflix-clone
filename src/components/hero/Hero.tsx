import React from 'react';
import { useLocation } from 'react-router-dom';
import { Cast, IMovie, ITVShow } from '../../types';
import Loader from '../ui/Loader';
import { HeroPoster, HeroImage, HeroText, CastList } from '..';

type HeroProps = {
  movie: IMovie | ITVShow | undefined;
  cast?: Cast[];
};

function Hero({ movie, cast }: HeroProps) {
  const { pathname } = useLocation();
  const moviePageConfig =
    pathname.includes('/movie/') || pathname.includes('/tv/');
  return (
    <div className="hero">
      {!movie?.backdrop_path ? (
        <Loader />
      ) : (
        <>
          <HeroImage movie={movie} />
          <div className="hero__container">
            {moviePageConfig && <HeroPoster moviePoster={movie?.poster_path} />}
            <div className="hero__info-cast">
            <HeroText movie={movie} />
              {moviePageConfig && <CastList cast={cast} />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
