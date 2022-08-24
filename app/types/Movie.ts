interface genresProps {
  id: number;
  name: string;
}

interface productionCompaniesProps {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface belongsToCollectionProps {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface productionCompaniesProps {
  iso_3166_1: string;
  name: string;
}

interface spokenLanguagesProps {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieListProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: belongsToCollectionProps;
  budget: number;
  genres: genresProps[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: productionCompaniesProps[];
  production_countries: productionCompaniesProps[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spokenLanguagesProps[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

//TV Show
interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Networks {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

interface Seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface TVProps {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: genresProps[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: string | null;
  networks: Networks[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: productionCompaniesProps[];
  production_countries: any;
  seasons: Seasons[];
  spoken_languages: any;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
