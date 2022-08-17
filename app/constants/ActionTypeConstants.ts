const ActionTypeConstants = {
  auth: 'auth',
  loginUser: 'auth/loginUser',
  signUp: 'auth/signUp',
  signUpGoogle: 'auth/signUpGoogle',

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
};

export default ActionTypeConstants;
