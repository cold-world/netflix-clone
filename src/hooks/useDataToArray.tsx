import useFetchMovies from '../api/movies';
import requests from '../utils/requests';

function useDataArray() {
  // ALL TRENDING
  const trending = useFetchMovies(requests.all.trending);
  // ALL MOVIES
  const topRatedMovies = useFetchMovies(requests.movies.topRated);
  const actionMovies = useFetchMovies(requests.movies.actionMovies);
  const comedyMovies = useFetchMovies(requests.movies.comedyMovies);
  const horrorMovies = useFetchMovies(requests.movies.horrorMovies);
  const romanceMovies = useFetchMovies(requests.movies.romanceMovies);
  const documentariesMovies = useFetchMovies(requests.movies.documentaries);
  // ALL TVSHOWS
  const topRatedShows = useFetchMovies(requests.tv.topRated);
  const comedyShows = useFetchMovies(requests.tv.comedyMovies);
  const romanceShows = useFetchMovies(requests.tv.romanceMovies);
  const documentariesShows = useFetchMovies(requests.tv.documentaries);

  const dataArrayMovies = [
    { type: trending, title: 'Trending' },
    { type: topRatedMovies, title: 'Top Rated' },
    { type: actionMovies, title: 'Action' },
    { type: comedyMovies, title: 'Comedy' },
    { type: horrorMovies, title: 'Horror' },
    { type: romanceMovies, title: 'Romance' },
    { type: documentariesMovies, title: 'Documentaries' },
  ];
  const dataArrayShows = [
    { type: topRatedShows, title: 'Top Rated' },
    { type: comedyShows, title: 'Comedy' },
    { type: romanceShows, title: 'Romance' },
    { type: documentariesShows, title: 'Documentaries' },
  ];

  return { dataArrayMovies, dataArrayShows };
}
export default useDataArray;
