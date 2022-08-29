import ENV from '../utils/env';

const API_KEY = ENV.MOVIE_DB_API;
const YOUTUBE_API_KEY = ENV.YOUTUBE_API_KEY;
const AppConstants = {
  API_IMAGE: 'https://image.tmdb.org/t/p/w500',
  BASE_URL: 'https://api.themoviedb.org/3/',
  DICE_BEAR_API: 'https://avatars.dicebear.com/api/croodles/',
  YOUTUBE_BASE_URL: 'https://youtube.googleapis.com/youtube/v3/',
  YOUTUBE_WATCH_BASE_URL: 'https://www.youtube.com/watch/',
  POPULAR_MOVIES_ENDPOINT: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  POPULAR_TV_ENDPOINT: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  MOVIES_IN_THEATRES_ENDPOINT: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  MOVIES_FOR_RENT_ENDPOINT: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=rent`,
  TRENDING_MOVIES_DAY_ENDPOINT: `trending/movie/day?api_key=${API_KEY}`,
  TRENDING_MOVIES_WEEK_ENDPOINT: `trending/movie/week?api_key=${API_KEY}`,
  FREE_MOVIES_ENDPOINT: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,
  FREE_TV_ENDPOINT: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=free&with_status=3&with_type=2`,
  TOP_RATED_ENDPOINT:
    '&sort_by=vote_count.desc&include_video=false&page=1&with_watch_monetization_types=free',
  POPULAR_PEOPLE: `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=`,
  MOVIE: 'movie/',
  TV: 'tv/',
  PERSON: 'person/',
  MOVIE_TRAILING_ENDPOINT: `?api_key=${API_KEY}&language=en-US`,
  MONETIZATION_FREE: '&with_watch_monetization_types=free',
  TOP_RATED_GENRE_ENDPOINT:
    '&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=',
  GENRE_ENDPOINT:
    '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=',
  FILMOGRAPHY_ENDPOINT:
    '&sort_by=vote_count.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=',
  LATEST_TRAILER_STREAMING: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  LATEST_TRAILER_TV: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=5`,
  LATEST_TRAILER_FOR_RENT: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=rent`,
  LATEST_TRAILER_IN_THEATRES: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  PEOPLE_ENDPOINT: '&with_people=',
  LATEST_TRAILER_BACKGROUND_IMAGE: '/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg',
  MOVIE_POPULAR: 'movie/popular',
  TV_POPULAR: 'tv/popular',
  TRENDING_MOVIE: 'trending/movie',
  DISCOVER_MOVIE: 'discover/movie',
  API: 'api_key',
  PAGE: '&page=',
  INCLUDE_ADULT: '&language=en-US&include_adult=',
  PEOPLE_IMAGES: `/images?api_key=${API_KEY}`,
  nameLimit: 22,
  usernameLimit: 15,
  userAboutLimit: 180,
};

export default AppConstants;
export { API_KEY, YOUTUBE_API_KEY };
