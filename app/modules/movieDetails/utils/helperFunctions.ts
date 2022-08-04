import firestore from '@react-native-firebase/firestore';

export const getMovieRatedByPeopleNumber = (movieRatedByValue: number) => {
  if (movieRatedByValue === 0) return 0;
  return movieRatedByValue;
};

export const getMovieRatingStar = ({
  movieRatedByValue,
  movieRatingValue,
}: {
  movieRatedByValue: number;
  movieRatingValue: number;
}) => {
  if (movieRatedByValue === 0) return 0;
  const starRating = movieRatingValue / movieRatedByValue;
  return starRating;
};

export const updateTotalRating = (rating: number, movieID: number) => {
  firestore()
    .collection('MovieRating')
    .doc(`${movieID}`)
    .set({ rating: firestore.FieldValue.increment(rating) }, { merge: true });
};
