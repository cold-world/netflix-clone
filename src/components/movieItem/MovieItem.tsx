import React from 'react';
import { AddIcon, LikeIcon, DislikeIcon } from '..';
import { getGenres, raitingHandler } from '../../utils/helpers';

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
  const backdropImage = img
    ? `https://image.tmdb.org/t/p/w500/${img}`
    : 'https://rb.gy/ulxxee';

  const { raiting, ratingColor } = raitingHandler(movieRating);
  const genres = getGenres(movieGenres);

  return (
    <div className="item">
      <img className="item__image" src={backdropImage} alt={movieTitle} />
      <div className="item__info">
        <div className="item__icons">
          <AddIcon className="item__icon" />
          <LikeIcon className="item__icon" />
          <DislikeIcon className="item__icon" />
        </div>
        {genres.map((item) => (
          <span key={item}>{item}</span>
        ))}
        {raiting && +raiting > 0 && (
          <span className={ratingColor}>{raiting}</span>
        )}
        <p className="item__desc">{movieDesc}</p>
      </div>
    </div>
  );
}

export default MovieItem;
