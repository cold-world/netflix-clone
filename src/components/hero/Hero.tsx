import React from 'react';
import { useLocation } from 'react-router-dom';
import { IMovie, ITVShow } from '../../types';
import Loader from '../ui/Loader';
import { HeroPoster, HeroImage, HeroText, Heading } from '..';

type HeroProps = {
  movie: IMovie | ITVShow | undefined;
};

function Hero({ movie }: HeroProps) {
  const { pathname } = useLocation();
  const moviePageConfig = pathname.includes('/movie/');
  return (
    <div className="hero">
      {!movie?.backdrop_path ? (
        <Loader />
      ) : (
        <>
          <HeroImage movie={movie} />
          <div className="hero__container">
            {moviePageConfig && <HeroPoster moviePoster={movie?.poster_path} />}
            <div className="hero__cont">
            <HeroText
              customStyle={moviePageConfig ? 'hero__info--right' : ''}
              movie={movie}
            />
            {moviePageConfig && (
              <div className="hero__cast">
                <Heading className="heading" tag="h4" text="Cast" />
              </div>
            )}
            </div> 
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
