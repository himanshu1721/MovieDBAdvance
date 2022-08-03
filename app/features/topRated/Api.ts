import axios from 'axios';
import AppConstants, { API_KEY } from '../../constants/AppConstants';

export const getTopRatedApi = () => {
  return axios.get(
    `${AppConstants.BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,
  );
};
