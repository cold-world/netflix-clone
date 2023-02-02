import React from 'react';
import { IMovie, ITVShow } from '../../api/movies';

type HeroTextProps = {
  randomMovie: IMovie | ITVShow | undefined;
};

export function HeroText({ randomMovie }: HeroTextProps) {
  const title =
    randomMovie && 'original_title' in randomMovie
      ? randomMovie.original_title
      : randomMovie && randomMovie.original_name;
  return (
    <div className="hero__info">
      <h2 className="hero__title">{title}</h2>
      <p className="hero__text">{randomMovie?.overview}</p>
    </div>
  );
}
