import React from 'react';
import { IMovie, ITVShow } from '../../types';

type HeroTextProps = {
  randomMovie: IMovie | ITVShow | undefined;
};

export function HeroText({ randomMovie }: HeroTextProps) {
  const title =
    randomMovie && 'title' in randomMovie
      ? randomMovie.title
      : randomMovie && randomMovie.name;

  const voites = randomMovie?.vote_average.toFixed(2);

  const year =
    randomMovie && 'release_date' in randomMovie
      ? randomMovie.release_date
      : randomMovie && randomMovie.first_air_date;

  return (
    <div className="hero__info">
      <h2 className="hero__title">{title}</h2>
      <div className="hero__more">
        <span>{voites}, </span>
        <span>release date {year}</span>
      </div>
      <p className="hero__text">{randomMovie?.overview}</p>
    </div>
  );
}
