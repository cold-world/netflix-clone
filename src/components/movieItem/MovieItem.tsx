import React from 'react';

type MovieItemProps = {
  img: string;
};

function MovieItem({ img }: MovieItemProps) {
  return (
    <div className="item">
      <img
        className="item__image"
        src={`https://image.tmdb.org/t/p/original${img}`}
        alt="a"
      />
    </div>
  );
}

export default MovieItem;
