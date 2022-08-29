interface PeopleKnownForProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface PeopleResultProps {
  adult: boolean;
  gender: number;
  id: number;
  known_for: PeopleKnownForProps;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}

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
