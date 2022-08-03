import MovieProps, { TVProps } from '../../types/Movie';

export interface PopularData {
  loading: boolean;
  popular: MovieProps[];
  error: boolean;
  nextPage: number;
}

export interface TrendingData {
  loading: boolean;
  error: boolean;
  trending: MovieProps[];
  nextPage: number;
}

export interface PopularTVData {
  loading: boolean;
  popularTV: TVProps[];
  error: boolean;
  nextPage: number;
}
