export interface FilmographyProps {
  loading: boolean;
  error: boolean;
  data: any[];
  currentPage: number;
  loadMore: boolean;
}

export interface FetchFilmographyResponse {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

export interface FetchFilmographyProps {
  id: number;
  page: number;
}
