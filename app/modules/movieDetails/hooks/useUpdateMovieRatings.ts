import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setHaveBeenRated } from '../../../features/detail/detailSlice';

export const useUpdateMovieRatings = (ifRatedByMeTheRating: number) => {
  const currentUserUID = useSelector(state => state.auth.userUID);
  const movies = useSelector(state => state.detail.movieDetails);

  const dispatch = useDispatch();

  const updateMovieInMyRatingsFB = (): void => {
    firestore()
      .collection('users')
      .doc(currentUserUID)
      .collection('myRatings')
      .doc(`${movies?.id}`)
      .set({ rating: ifRatedByMeTheRating, item: movies });
    dispatch(setHaveBeenRated());
  };

  const rateMovie = (): void => {
    firestore()
      .collection('MovieRating')
      .doc(`${movies.id}`)
      .collection('ratedByUsers')
      .doc(currentUserUID)
      .set({ rated: ifRatedByMeTheRating });
    updateMovieInMyRatingsFB();
  };

  return { rateMovie };
};
