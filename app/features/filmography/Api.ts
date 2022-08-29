import axios from 'axios';
import AppConstants from '../../constants/AppConstants';

export const fetchFilmographyApi = (id: number, page: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.DISCOVER_MOVIE}${AppConstants.MOVIE_TRAILING_ENDPOINT}${AppConstants.PEOPLE_ENDPOINT}${id}${AppConstants.FILMOGRAPHY_ENDPOINT}${page}`,
  );
};
