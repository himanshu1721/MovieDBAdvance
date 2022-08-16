import axios from 'axios';
import AppConstants, { API_KEY } from '../../constants/AppConstants';

export const getTopRatedApi = (isCurrentUserAdult: boolean) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.DISCOVER_MOVIE}?api_key=${API_KEY}${AppConstants.INCLUDE_ADULT}${isCurrentUserAdult}${AppConstants.TOP_RATED_ENDPOINT}`,
  );
};
