import React from 'react';
import { IMovie, ITVShow } from '../../types';
import { Heading } from '..';
import { getGenres, getYear, raitingHandler } from '../../utils/helpers';

interface HeroTextProps {
  movie: IMovie | ITVShow | undefined;
  customStyle?: string;
}

function HeroText({ movie, customStyle }: HeroTextProps) {
  const title = movie && 'title' in movie ? movie.title : movie && movie.name;

  const { raiting, ratingColor } = raitingHandler(movie?.vote_average);

  const year = getYear(movie);

  const genres =
    // eslint-disable-next-line no-nested-ternary
    movie && movie?.genre_ids
      ? getGenres(movie.genre_ids)
      : movie?.genres
      ? movie.genres.map((item) => item.name)
      : undefined;

  return (
    <div className={`${customStyle} hero__info`}>
      <Heading className="hero__title" text={title} tag="h2" />
      <div className="hero__more">
        {raiting && +raiting > 0 && (
          <span className={ratingColor}>{raiting}, </span>
        )}
        {genres?.map((item) => (
          <span key={item}>{item}. </span>
        ))}
        <span>Release date {year}</span>
      </div>
      <p className="hero__text">{movie?.overview}</p>
    </div>
  );
}

export default HeroText;
