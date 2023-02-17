import { IRequest } from '../types';

const API_KEY = process.env.MOVIEDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
export const fetchByIdUrl = (id: string, type: string) =>
  `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`;

export const fetchCast = (id: string, type: string) =>
  `${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}`;

export const fetchTeaser = (id: string, type: string) =>
  `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`;

export const fetchSimilar = (id: string) =>
  `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;

const requests: IRequest = {
  all: {
    trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&`,
  },
  movies: {
    trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    romanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  },
  tv: {
    trending: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    topRated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    comedyMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
    romanceMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    documentaries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,
  },
};

export default requests;
