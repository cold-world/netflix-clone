import React, { useState } from 'react';
import { AddIcon, LikeIcon, Heading } from '..';
import { raitingHandler } from '../../utils/helpers';

type MovieItemProps = {
  img: string;
  movieTitle: string;
  movieDesc: string;
  movieRating: number;
  movieGenres: number[];
};

function MovieItem({
  img,
  movieTitle,
  movieDesc,
  movieRating,
  movieGenres,
}: MovieItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const backdropImage = img
    ? `https://image.tmdb.org/t/p/original/${img}`
    : 'https://rb.gy/ulxxee';

  const { raiting, ratingColor } = raitingHandler(movieRating);

  return (
    <div
      className="item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="item__image" src={backdropImage} alt={movieTitle} />
      <div className="item__info">
        <Heading className="item__title" text={movieTitle} tag="h4" />
        <div className="item__icons">
          <AddIcon className="item__icon" />
          <LikeIcon className="item__icon" />
        </div>

        {raiting && +raiting > 0 && (
          <span className={ratingColor}>{raiting}</span>
        )}
      </div>
    </div>
  );
}

export default MovieItem;
