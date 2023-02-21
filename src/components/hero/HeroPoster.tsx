import React from 'react';

type HeroPosterProps = {
  moviePoster: string;
};

function HeroPoster({ moviePoster }: HeroPosterProps) {
  return (
    <div className="hero__poster">
      <img
        src={`https://image.tmdb.org/t/p/original${moviePoster}`}
        alt="film poster"
      />
    </div>
  );
}

export default HeroPoster;
