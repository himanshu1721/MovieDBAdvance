const ActionTypeConstants = {
  auth: 'auth',
  loginUser: 'auth/loginUser',
  signUp: 'auth/signUp',
  signUpGoogle: 'auth/signUpGoogle',
  signUpPhone: 'auth/signInPhone',
  popular: 'popular',
  trending: 'trending',
  popularTV: 'popularTV',
  fetchPopular: 'popular/fetchPopular',
  fetchPopularTV: 'popular/fetchPopularTV',
  fetchTrending: 'trending/fetchTrending',
  detail: 'detail',
  fetchMovie: 'detail/fetchMovie',
  focus: 'focus',
  topRated: 'topRated',
  getTopRated: 'topRated/getTopRated',
  fetchPopularGenre: 'genre/fetchPopularGenre',
  fetchTopRatedGenre: 'genre/fetchTopRatedGenre',
  fetchPeople: 'people/fetchPeople',
  fetchPeopleImages: 'celebrity/fetchImages',
  fetchPeopleDetails: 'celebrity/fetchDetail'
};

export default ActionTypeConstants;
