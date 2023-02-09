export interface IResponsePopularMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IResponsePopularTVShows {
  page: number;
  results: ITVShow[];
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: {id: number, name: string}[]
}

export interface ITVShow {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  genres?: {id: number, name: string}[]
}

export interface IRequest {
  all: {
    trending: string;
  };
  movies: {
    trending: string;
    topRated: string;
    actionMovies: string;
    comedyMovies: string;
    horrorMovies: string;
    romanceMovies: string;
    documentaries: string;
  };
  tv: {
    trending: string;
    topRated: string;
    comedyMovies: string;
    romanceMovies: string;
    documentaries: string;
  };
}

export type MovieType = 'movie' | 'tv';
