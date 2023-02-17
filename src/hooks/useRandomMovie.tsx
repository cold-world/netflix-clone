import React, { useMemo } from 'react';
import { IResponsePopularMovies, IResponsePopularTVShows } from '../types';

type UseRandomMovieProps = {
  data: IResponsePopularMovies | IResponsePopularTVShows | undefined;
};

function useRandomMovie({ data }: UseRandomMovieProps) {
  return useMemo(() => {
    return data?.results[Math.floor(Math.random() * data.results.length)];
  }, [data]);
}

export default useRandomMovie;
