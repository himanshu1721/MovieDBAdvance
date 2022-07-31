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
