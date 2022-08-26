import { PeopleResultProps } from '../../types/Movie';

export interface PeopleResponsePayload {
  page: number;
  results: PeopleResultProps[];
  total_pages: number;
  total_results: number;
}

export interface PeopleProps {
  loading: boolean;
  data: PeopleResultProps[];
  error: boolean;
}
