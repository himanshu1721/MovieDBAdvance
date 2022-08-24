import { MovieListProps } from '../../types/Movie';

export interface GenrePopularResponsePayload {
  page: number;
  results: MovieListProps[];
  total_pages: number;
  total_results: number;
}

export interface GenrePopular {
  loading: boolean;
  data: MovieListProps[];
  error: boolean;
}

export interface GenreID {
  id: number;
}
