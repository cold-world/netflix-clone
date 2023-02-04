import React from 'react';

type MovieItemProps = {
  img: string;
};

function MovieItem({ img }: MovieItemProps) {
  const backdropImage = img
    ? `https://image.tmdb.org/t/p/w500/${img}`
    : 'https://rb.gy/ulxxee';
  return (
    <div className="item">
      <img className="item__image" src={backdropImage} alt="a" />
    </div>
  );
}

export default MovieItem;
