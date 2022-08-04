import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMovieRating,
  setMovieRatingByPeople,
} from '../../../features/detail/detailSlice';
import { getMovieRatingStar } from '../utils/helperFunctions';

export const useCheckMovieRating = () => {
  const movieRatingValue = useSelector(state => state?.detail?.movieRating);
  const movieRatedByValue = useSelector(
    state => state?.detail?.movieRatingByPeople,
  );

  const dispatch = useDispatch();

  const movies = useSelector(state => state?.detail?.movieDetails);

  const checkIfMovieExistsInRating = async () => {
    const movie = await firestore()
      .collection('MovieRating')
      .doc(`${movies?.id}`)
      .get();
    if (movie.exists) {
      dispatch(setMovieRatingByPeople(movie?.data()?.ratedBy));
      dispatch(setMovieRating(movie?.data()?.rating));
      getMovieRatingStar({ movieRatedByValue, movieRatingValue });
    } else if (!movie.exists) {
      dispatch(setMovieRatingByPeople(0));
      dispatch(setMovieRating(0));
    }
  };

  useEffect(() => {
    checkIfMovieExistsInRating();
  }, [dispatch, movies?.id]);

  return { movieRatedByValue, movieRatingValue };
};
