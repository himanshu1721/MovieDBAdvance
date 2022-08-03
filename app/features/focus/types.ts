import MovieProps, { TVProps } from '../../types/Movie';

export interface FocusData {
  isFocus: boolean;
  data: MovieProps | TVProps | null;
}
