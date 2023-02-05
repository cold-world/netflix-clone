import React from 'react';
import { ArrowLeft, ArrowRight, Heading, MovieItem } from '..';
import useSliderClick from '../../hooks/useSliderClick';
import { IResponsePopularMovies, IResponsePopularTVShows } from '../../types';

interface MovieListProps extends React.HTMLAttributes<HTMLDivElement> {
  type: IResponsePopularMovies | IResponsePopularTVShows | undefined;
  title: string;
}

function MovieList({ type, title }: MovieListProps) {
  const { handleClick, slideNumber, listRef } = useSliderClick();
  return (
    <div className="list">
      <Heading className="heading" tag="h4" text={title} />
      <div className="list__wrapper">
        {slideNumber > 0 && (
          <ArrowLeft
            className="list__arrow left"
            onClick={() => handleClick('left')}
          />
        )}
        <div className="list__container" ref={listRef}>
          {type?.results.map((movie) => (
            <MovieItem key={movie.id} img={movie.backdrop_path} />
          ))}
        </div>
        {slideNumber < 15 && (
          <ArrowRight
            className="list__arrow right"
            onClick={() => handleClick('right')}
          />
        )}
      </div>
    </div>
  );
}

export default MovieList;
