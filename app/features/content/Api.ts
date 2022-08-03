import axios from 'axios';
import AppConstants, { API_KEY } from '../../constants/AppConstants';

export const fetchPopularMoviesApi = (payload: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${payload}`,
  );
};

export const fetchPopularTVApi = (payload: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${payload}`,
  );
};

export const fetchTrendingApi = (payload: number) => {
  return axios.get(
    `${AppConstants.BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US&page=${payload}`,
  );
};
