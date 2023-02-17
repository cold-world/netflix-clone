/* eslint-disable no-prototype-builtins */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Heading, MovieItem } from '..';
import useSliderClick from '../../hooks/useSliderClick';
import {
  IResponsePopularMovies,
  IResponsePopularTVShows,
  IMovie,
  ITVShow,
} from '../../types';

interface MovieListProps extends React.HTMLAttributes<HTMLDivElement> {
  type: IResponsePopularMovies | IResponsePopularTVShows | undefined;
  heading: string;
}

function MovieList({ type, heading }: MovieListProps) {
  const { handleClick, slideNumber, listRef } = useSliderClick();
  const { pathname } = useLocation();
  const isTv = pathname.includes('/tvshows');

  return (
    <div className="list">
      <Heading tag="h4" text={heading} />
      <div className="list__wrapper">
        {slideNumber > 0 && (
          <ArrowLeft
            className="list__arrow left"
            onClick={() => handleClick('left')}
          />
        )}
        <div className="list__container" ref={listRef}>
          {type?.results.map((movie, index) => {
            let movieTitle: string;
            if (movie.hasOwnProperty('title')) {
              movieTitle = (movie as IMovie).title;
            } else {
              movieTitle = (movie as ITVShow).name;
            }
            return (
              <Link
                key={movie.id}
                to={isTv ? `/tv/${movie.id}` : `/movie/${movie.id}`}
              >
                <MovieItem
                  img={movie.backdrop_path}
                  movieTitle={movieTitle}
                  movieDesc={movie.overview}
                  movieRating={movie.vote_average}
                  movieGenres={movie.genre_ids}
                />
              </Link>
            );
          })}
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
