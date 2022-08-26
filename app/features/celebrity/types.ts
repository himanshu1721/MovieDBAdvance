interface ProfileProps {
  aspect_ratio: number;
  height: number;
  width: number;
  iso_639_1: any | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
}

export interface FetchDetailsResponse {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface PeopleDetail {
  loadingImages: boolean;
  errorImages: boolean;
  loadingDetails: boolean;
  errorDetails: boolean;
  images: ProfileProps[];
  details: FetchDetailsResponse | {};
}

export interface FetchDetailProps {
  id: number;
}

export interface FetchImagesResponse {
  id: number;
  profiles: ProfileProps[];
}
