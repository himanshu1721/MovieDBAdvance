import axios from 'axios';
import AppConstants from '../../constants/AppConstants';

export const fetchPopularGenreApi = (id: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.DISCOVER_MOVIE}${AppConstants.MOVIE_TRAILING_ENDPOINT}${AppConstants.GENRE_ENDPOINT}${id}${AppConstants.MONETIZATION_FREE}`,
  );
};

export const fetchTopRatedGenreApi = (id: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.DISCOVER_MOVIE}${AppConstants.MOVIE_TRAILING_ENDPOINT}${AppConstants.TOP_RATED_GENRE_ENDPOINT}${id}${AppConstants.MONETIZATION_FREE}`,
  );
};
