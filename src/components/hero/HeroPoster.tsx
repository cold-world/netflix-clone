import React from 'react';

type HeroPosterProps = {
  moviePoster: string;
}

function HeroPoster({moviePoster} : HeroPosterProps) {
  return (
    <img
          className="hero__poster"
          src={`https://image.tmdb.org/t/p/original${moviePoster}`}
          alt="film poster"
        />
  )
}

export default HeroPoster