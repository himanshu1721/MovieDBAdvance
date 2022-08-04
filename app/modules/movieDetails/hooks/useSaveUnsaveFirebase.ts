import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { setHaveBeenRated } from '../../../features/detail/detailSlice';

export const useSaveUnsaveFirebase = (doesMovieExists: boolean) => {
  const currentUserUID = useSelector(state => state.auth.userUID);
  const movies = useSelector(state => state.detail.movieDetails);
  const dispatch = useDispatch();

  const onSavingMovie = () => {
    doesMovieExists
      ? firestore()
          .collection('users')
          .doc(currentUserUID)
          .collection('watchLater')
          .doc(`${movies?.id}`)
          .delete()
      : firestore()
          .collection('users')
          .doc(currentUserUID)
          .collection('watchLater')
          .doc(`${movies?.id}`)
          .set(movies);
  };

  const getRating = (): void => {
    firestore()
      .collection('MovieRating')
      .doc(`${movies?.id}`)
      .set(
        { ratedBy: firestore.FieldValue.increment(1) ?? 0 },
        { merge: true },
      );
  };

  return { onSavingMovie, getRating };
};
