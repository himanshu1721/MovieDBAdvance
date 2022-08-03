import axios from 'axios';
import AppConstants, { API_KEY } from '../../constants/AppConstants';
import { FetchMovieProps } from './types';

export const fetchMovieApi = ({ type, movieID }: FetchMovieProps) => {
  return axios.get(
    `${AppConstants.BASE_URL}${type}/${movieID}?api_key=${API_KEY}&language=en-US`,
  );
};
