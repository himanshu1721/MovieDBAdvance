const API_KEY = '75f81ae108c32ef6e09c4adf44096089';
const AppConstants = {
  API_IMAGE: 'https://image.tmdb.org/t/p/w500',
  BASE_URL: 'https://api.themoviedb.org/3/',
  POPULAR_MOVIES_ENDPOINT: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  POPULAR_TV_ENDPOINT: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  MOVIES_IN_THEATRES_ENDPOINT: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  MOVIES_FOR_RENT_ENDPOINT: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=rent`,
  TRENDING_MOVIES_DAY_ENDPOINT: `trending/movie/day?api_key=${API_KEY}`,
  TRENDING_MOVIES_WEEK_ENDPOINT: `trending/movie/week?api_key=${API_KEY}`,
  FREE_MOVIES_ENDPOINT: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,
  FREE_TV_ENDPOINT: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=free&with_status=3&with_type=2`,
  MOVIE: 'movie/',
  TV: 'tv/',
  MOVIE_TRAILING_ENDPOINT: `?api_key=${API_KEY}&language=en-US`,
  LATEST_TRAILER_STREAMING: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  LATEST_TRAILER_TV: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=5`,
  LATEST_TRAILER_FOR_RENT: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=rent`,
  LATEST_TRAILER_IN_THEATRES: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  LATEST_TRAILER_BACKGROUND_IMAGE: '/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg',
};

export default AppConstants;
export {API_KEY};
