import axios from 'axios';
import AppConstants, { API_KEY } from '../../constants/AppConstants';

interface FetchListProps {
  page: number;
  isCurrentUserAdult: boolean;
}

export const fetchPopularMoviesApi = ({
  page,
  isCurrentUserAdult,
}: FetchListProps) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.MOVIE_POPULAR}?${AppConstants.API}=${API_KEY}${AppConstants.INCLUDE_ADULT}${isCurrentUserAdult}${AppConstants.PAGE}${page}`,
  );
};

export const fetchPopularTVApi = ({
  page,
  isCurrentUserAdult,
}: FetchListProps) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.TV_POPULAR}?${AppConstants.API}=${API_KEY}${AppConstants.INCLUDE_ADULT}${isCurrentUserAdult}${AppConstants.PAGE}${page}`,
  );
};

export const fetchTrendingApi = ({
  page,
  isCurrentUserAdult,
}: FetchListProps) => {
  return axios.get(
    `${AppConstants.BASE_URL}${AppConstants.TRENDING_MOVIE}/day?${AppConstants.API}=${API_KEY}${AppConstants.INCLUDE_ADULT}${isCurrentUserAdult}${AppConstants.PAGE}${page}`,
  );
};
