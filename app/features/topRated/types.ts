import MovieProps from '../../types/Movie';

export interface TopRatedProps {
  loading: boolean;
  topRatedMovies: MovieProps[];
  error: boolean;
}
