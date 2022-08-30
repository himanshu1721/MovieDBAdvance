import axios from 'axios';
import AppConstants from '../../constants/AppConstants';

export const fetchImagesApi = (id: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.PERSON}${id}${AppConstants.PEOPLE_IMAGES}`,
  );
};

export const fetchDetailApi = (id: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.PERSON}${id}${AppConstants.MOVIE_TRAILING_ENDPOINT}`,
  );
};
