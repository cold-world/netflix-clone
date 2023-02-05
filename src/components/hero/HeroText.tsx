import React from 'react';
import { IMovie, ITVShow } from '../../types';
import {Heading} from '../'
import { raitingHandler } from '../../utils/helpers';

type HeroTextProps = {
  randomMovie: IMovie | ITVShow | undefined;
};

function HeroText({ randomMovie }: HeroTextProps) {
  const title =
    randomMovie && 'title' in randomMovie
      ? randomMovie.title
      : randomMovie && randomMovie.name;

  const {raiting, ratingColor} = raitingHandler(randomMovie?.vote_average);
   
  const year =
    randomMovie && 'release_date' in randomMovie
      ? randomMovie.release_date
      : randomMovie && randomMovie.first_air_date;

  return (
    <div className="hero__info">
      <Heading className='hero__title' text={title} tag='h2' />
      <div className="hero__more">
        {raiting && +raiting > 0 && (
          <span className={ratingColor}>raiting {raiting}, </span>
        )}
        <span>release date {year}</span>
      </div>
      <p className="hero__text">{randomMovie?.overview}</p>
    </div>
  );
}

export default HeroText;
