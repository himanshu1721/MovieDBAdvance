import axios from 'axios';
import AppConstants from '../../constants/AppConstants';

export const fetchPeopleApi = (page: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.POPULAR_PEOPLE}${page}`,
  );
};
