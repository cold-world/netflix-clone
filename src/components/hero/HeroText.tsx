import React from 'react';
import { IMovie, ITVShow } from '../../types';

type HeroTextProps = {
  randomMovie: IMovie | ITVShow | undefined;
};

function HeroText({ randomMovie }: HeroTextProps) {
  const title =
    randomMovie && 'title' in randomMovie
      ? randomMovie.title
      : randomMovie && randomMovie.name;

  const raiting = randomMovie?.vote_average.toFixed(2);
  const ratingColor =
    // eslint-disable-next-line no-nested-ternary
    raiting && +raiting > 6.9
      ? 'raiting-green'
      : raiting && +raiting > 5.9
      ? 'raiting-orange'
      : 'raiting-red';

  const year =
    randomMovie && 'release_date' in randomMovie
      ? randomMovie.release_date
      : randomMovie && randomMovie.first_air_date;

  return (
    <div className="hero__info">
      <h2 className="hero__title">{title}</h2>
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
